import { Flex, HStack } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import FormDateInput from './FormDateInput';
import FormControl from '../FormControl/FormControl';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import FormLabel from '~/components/atoms/FormLabel/FormLabel';
import { FormInputSchema } from '~/types/formInput';

const meta = {
  title: 'Resumeme/Components/FormDateInput',
  component: FormDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FormDateInput>;

export default meta;

export const DefaultFormDateInput = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: { [key: string]: string }) => {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  };

  const FORM_RESUME_DATE_INPUT_SCHEMA: FormInputSchema = {
    endEventDate: {
      type: 'date',
      label: '첨삭 종료일',
      placeholder: '',
      errorTypes: {
        required: true,
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BorderBox>
        <FormControl
          isInvalid={!!errors['endEventDate']}
          key={'endEventDate'}
        >
          <HStack spacing={0}>
            {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label && (
              <FormLabel
                htmlFor={'endEventDate'}
                isRequired={'required' in FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes}
              >
                {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label}
              </FormLabel>
            )}
            <Flex direction={'column'}>
              <FormDateInput
                name="endEventDate"
                w={'16rem'}
                register={{
                  ...register('endEventDate', {
                    ...FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes,
                  }),
                }}
              />
            </Flex>
          </HStack>
        </FormControl>
      </BorderBox>
      <Button
        size={'md'}
        ml={'2.06rem'}
        mt={'2.62rem'}
        isLoading={isSubmitting}
        type="submit"
      >
        등록하기
      </Button>
    </form>
  );
};

export const TimeFormDateInput = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: { [key: string]: string }) => {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  };

  const FORM_RESUME_DATE_INPUT_SCHEMA: FormInputSchema = {
    endEventDate: {
      type: 'datetime-local',
      label: '첨삭 종료일',
      placeholder: '',
      errorTypes: {
        required: true,
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BorderBox>
        <FormControl
          isInvalid={!!errors['endEventDate']}
          key={'endEventDate'}
        >
          <HStack spacing={0}>
            {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label && (
              <FormLabel
                htmlFor={'endEventDate'}
                isRequired={'required' in FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes}
              >
                {FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].label}
              </FormLabel>
            )}
            <Flex direction={'column'}>
              <FormDateInput
                type="datetime-local"
                w={'16rem'}
                register={{
                  ...register('endEventDate', {
                    ...FORM_RESUME_DATE_INPUT_SCHEMA['endEventDate'].errorTypes,
                  }),
                }}
                name={'endEventDate'}
              />
            </Flex>
          </HStack>
        </FormControl>
      </BorderBox>
      <Button
        size={'md'}
        ml={'2.06rem'}
        mt={'2.62rem'}
        isLoading={isSubmitting}
        type="submit"
      >
        등록하기
      </Button>
    </form>
  );
};
