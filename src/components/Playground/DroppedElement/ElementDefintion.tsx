import type { FC } from 'react'
import type { ElementMostBasicProps } from '@common/types'
import type { DroppedElementPropsPart } from '@components/Playground/DroppedElement/DroppedElement'
import type { DroppedElementProps } from '@components/Playground/DroppedElement/DroppedElement'
import {
  FileUploadDefinition,
  InputDefinition,
  SelectDefinition,
  TextareaDefinition,
} from '../Definitions'
import {
  CHECKBOX,
  DATEPICKER,
  EMAIL_INPUT,
  LONG_TEXT,
  MULTISELECT,
  PHONE_INPUT,
  SELECT,
  SHORT_TEXT,
  TEXT_INPUT,
  UPLOAD,
} from '@common/constants'
import { setInputType } from '@helpers/setInputType'

type ElementDefinitionPropsPart = Pick<DroppedElementPropsPart, 'value'> &
  Omit<ElementMostBasicProps, 'description'>

export type ElementDefinitionProps = ElementDefinitionPropsPart & {
  id: DroppedElementProps['id']
}

export const ElementDefinition: FC<ElementDefinitionProps> = ({
  id,
  type,
  name,
  placeholder,
  value,
  descriptionForInput,
  required,
}) => {
  const inpType = setInputType(type)

  switch (type) {
    case TEXT_INPUT:
    case EMAIL_INPUT:
    case PHONE_INPUT:
    case SHORT_TEXT:
    case CHECKBOX:
    case DATEPICKER:
      return (
        <InputDefinition
          id={id}
          name={name}
          placeholder={placeholder}
          descriptionForInput={descriptionForInput}
          value={value}
          required={required}
          type={inpType}
        />
      )

    case LONG_TEXT:
      return <TextareaDefinition id={id} name={name} placeholder={placeholder} value={value} />

    case SELECT:
      return <SelectDefinition id={id} />

    case MULTISELECT:
      return <SelectDefinition multiselect={true} id={id} />

    case UPLOAD:
      return <FileUploadDefinition />

    default:
      return <></>
  }
}
