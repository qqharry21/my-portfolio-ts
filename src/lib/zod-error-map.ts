/**
 * This error map is a modified version of the on used by zod-i18n
 * Checkout the original at: https://github.com/aiji42/zod-i18n
 */
import type {
  ZodCustomIssue,
  ZodErrorMap,
  ZodInvalidArgumentsIssue,
  ZodInvalidDateIssue,
  ZodInvalidEnumValueIssue,
  ZodInvalidIntersectionTypesIssue,
  ZodInvalidLiteralIssue,
  ZodInvalidReturnTypeIssue,
  ZodInvalidStringIssue,
  ZodInvalidTypeIssue,
  ZodInvalidUnionDiscriminatorIssue,
  ZodInvalidUnionIssue,
  ZodNotFiniteIssue,
  ZodNotMultipleOfIssue,
  ZodTooBigIssue,
  ZodTooSmallIssue,
  ZodUnrecognizedKeysIssue,
} from 'zod';
import { defaultErrorMap, ZodIssueCode, ZodParsedType } from 'zod';

import type { NamespaceKeys, useTranslations } from 'next-intl';

const jsonStringifyReplacer = (_: string, value: unknown): unknown => {
  if (typeof value === 'bigint') {
    return value.toString();
  }
  return value;
};

function joinValues<T extends unknown[]>(array: T, separator = ' | '): string {
  return array.map((val) => (typeof val === 'string' ? `'${val}'` : val)).join(separator);
}

const isRecord = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== 'object' || value === null) return false;

  // eslint-disable-next-line no-restricted-syntax
  for (const key in value) {
    if (!Object.hasOwn(value, key)) return false;
  }

  return true;
};

const getKeyAndValues = (
  param: unknown,
  defaultKey: string
): {
  values: Record<string, unknown>;
  key: string;
} => {
  if (typeof param === 'string') return { key: param, values: {} };

  if (isRecord(param)) {
    const key = 'key' in param && typeof param.key === 'string' ? param.key : defaultKey;
    const values = 'values' in param && isRecord(param.values) ? param.values : {};
    return { key, values };
  }

  return { key: defaultKey, values: {} };
};

type TFunction = ReturnType<typeof useTranslations<NamespaceKeys<IntlMessages, string>>>;

type ZodI18nMapOption = {
  t: TFunction;
  ns?: string | readonly string[];
};

type Path = {
  path: string;
};

type MakeZodI18nMap = (option: ZodI18nMapOption) => ZodErrorMap;

type InvalidHandler<T> = (issue: T, t: TFunction, path: Path) => string;

const handleInvalidType: InvalidHandler<ZodInvalidTypeIssue> = (issue, t, path) => {
  if (issue.received === ZodParsedType.undefined) {
    return t('zod.errors.invalid_type_received_undefined', { ...path });
  } else {
    return t('zod.errors.invalid_type', {
      expected: t(`zod.types.${issue.expected}`),
      received: t(`zod.types.${issue.received}`),
      ...path,
    });
  }
};

const handleInvalidLiteral: InvalidHandler<ZodInvalidLiteralIssue> = (issue, t, path) => {
  return t('zod.errors.invalid_literal', {
    expected: JSON.stringify(issue.expected, jsonStringifyReplacer),
    ...path,
  });
};

const handleUnrecognizedKeys: InvalidHandler<ZodUnrecognizedKeysIssue> = (issue, t, path) => {
  return t('zod.errors.unrecognized_keys', {
    keys: joinValues(issue.keys, ', '),
    count: issue.keys.length,
    ...path,
  });
};

const handleInvalidUnion: InvalidHandler<ZodInvalidUnionIssue> = (issue, t, path) => {
  return t('zod.errors.invalid_union', {
    ...path,
  });
};

const handleInvalidUnionDiscriminator: InvalidHandler<ZodInvalidUnionDiscriminatorIssue> = (
  issue,
  t,
  path
) => {
  return t('zod.errors.invalid_union_discriminator', {
    options: joinValues(issue.options),
    ...path,
  });
};

const handleInvalidEnumValue: InvalidHandler<ZodInvalidEnumValueIssue> = (issue, t, path) => {
  return t('zod.errors.invalid_enum_value', {
    options: joinValues(issue.options),
    received: issue.received,
    ...path,
  });
};

const handleInvalidArguments: InvalidHandler<ZodInvalidArgumentsIssue> = (issue, t, path) => {
  return t('zod.errors.invalid_arguments', {
    ...path,
  });
};

const handleInvalidReturnTypes: InvalidHandler<ZodInvalidReturnTypeIssue> = (issue, t, path) => {
  return t('zod.errors.invalid_return_type', {
    ...path,
  });
};

const handleInvalidDate: InvalidHandler<ZodInvalidDateIssue> = (issue, t, path) => {
  return t('zod.errors.invalid_date', {
    ...path,
  });
};

const handleInvalidString: InvalidHandler<ZodInvalidStringIssue> = (issue, t, path) => {
  if (typeof issue.validation === 'object') {
    if ('startsWith' in issue.validation) {
      return t('zod.errors.invalid_string.startsWith', {
        startsWith: issue.validation.startsWith as keyof IntlMessages,
        ...path,
      });
    } else if ('endsWith' in issue.validation) {
      return t('zod.errors.invalid_string.endsWith', {
        endsWith: issue.validation.endsWith,
        ...path,
      });
    }
    return '';
  } else {
    return t(
      `zod.errors.invalid_string.${issue.validation}` as NamespaceKeys<IntlMessages, string>,
      {
        validation: t(`zod.validations.${issue.validation}` as NamespaceKeys<IntlMessages, string>),
        ...path,
      }
    );
  }
};

const handleTooSmall: InvalidHandler<ZodTooSmallIssue> = (issue, t, path) => {
  const minimum =
    issue.type === 'date' ? new Date(issue.minimum as number) : (issue.minimum as number);

  if (minimum === 1 && issue.type === 'string') {
    return t('zod.errors.required');
  }

  return t(
    `zod.errors.too_small.${issue.type}.${
      // eslint-disable-next-line no-nested-ternary
      issue.exact ? 'exact' : issue.inclusive ? 'inclusive' : 'not_inclusive'
    }`,
    {
      minimum,
      count: typeof minimum === 'number' ? minimum : undefined,
      ...path,
    }
  );
};

const handleTooBig: InvalidHandler<ZodTooBigIssue> = (issue, t, path) => {
  const maximum =
    issue.type === 'date' ? new Date(issue.maximum as number) : (issue.maximum as number);
  return t(
    `zod.errors.too_big.${issue.type}.${
      // eslint-disable-next-line no-nested-ternary
      issue.exact ? 'exact' : issue.inclusive ? 'inclusive' : 'not_inclusive'
    }`,
    {
      maximum,
      count: typeof maximum === 'number' ? maximum : undefined,
      ...path,
    }
  );
};

const handleCustom: InvalidHandler<ZodCustomIssue> = (issue, t, path) => {
  const { key, values } = getKeyAndValues(issue.params?.i18n, 'zod.errors.custom');

  return t(key as Parameters<typeof t>[0], {
    ...values,
    ...path,
  });
};

const handleInvalidIntersectionTypes: InvalidHandler<ZodInvalidIntersectionTypesIssue> = (
  issue,
  t,
  path
) => {
  return t('zod.errors.invalid_intersection_types', {
    ...path,
  });
};

const handleNotMultipleOf: InvalidHandler<ZodNotMultipleOfIssue> = (issue, t, path) => {
  return t('zod.errors.not_multiple_of', {
    multipleOf: issue.multipleOf as number,
    ...path,
  });
};

const handleNotFinite: InvalidHandler<ZodNotFiniteIssue> = (issue, t, path) => {
  return t('zod.errors.not_finite', {
    ...path,
  });
};

export const makeZodI18nMap: MakeZodI18nMap =
  ({ t }) =>
  (issue, ctx) => {
    let message: string;
    message = defaultErrorMap(issue, ctx).message;

    const path =
      issue.path.length > 0
        ? {
            path: t(
              ['form', ...issue.path, 'label'].join('.') as NamespaceKeys<IntlMessages, string>
            ),
          }
        : { path: t(['zod', ...issue.path].join('.') as NamespaceKeys<IntlMessages, string>) };

    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        message = handleInvalidType(issue, t, path);
        break;
      case ZodIssueCode.invalid_literal:
        message = handleInvalidLiteral(issue, t, path);
        break;
      case ZodIssueCode.unrecognized_keys:
        message = handleUnrecognizedKeys(issue, t, path);
        break;
      case ZodIssueCode.invalid_union:
        message = handleInvalidUnion(issue, t, path);
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = handleInvalidUnionDiscriminator(issue, t, path);
        break;
      case ZodIssueCode.invalid_enum_value:
        message = handleInvalidEnumValue(issue, t, path);
        break;
      case ZodIssueCode.invalid_arguments:
        message = handleInvalidArguments(issue, t, path);
        break;
      case ZodIssueCode.invalid_return_type:
        message = handleInvalidReturnTypes(issue, t, path);
        break;
      case ZodIssueCode.invalid_date:
        message = handleInvalidDate(issue, t, path);
        break;
      case ZodIssueCode.invalid_string:
        message = handleInvalidString(issue, t, path) ?? '';
        break;
      case ZodIssueCode.too_small:
        message = handleTooSmall(issue, t, path);
        break;
      case ZodIssueCode.too_big:
        message = handleTooBig(issue, t, path);
        break;
      case ZodIssueCode.custom:
        message = handleCustom(issue, t, path);
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = handleInvalidIntersectionTypes(issue, t, path);
        break;
      case ZodIssueCode.not_multiple_of:
        message = handleNotMultipleOf(issue, t, path);
        break;
      case ZodIssueCode.not_finite:
        message = handleNotFinite(issue, t, path);
        break;
      default:
    }

    return { message };
  };
