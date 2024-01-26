import type { Field } from 'payload/types'

import linkGroup from './linkGroup'
import richText from './richText'
import label from './richText/label'
import largeBody from './richText/largeBody'

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: {
        en: 'Type',
        pt: 'Tipo',
      },
      required: true,
      defaultValue: 'lowImpact',
      options: [
        {
          label: {
            en: 'None',
            pt: 'Nenhum',
          },
          value: 'none',
        },
        {
          label: {
            en: 'High Impact',
            pt: 'Alto Impacto',
          },
          value: 'highImpact',
        },
        {
          label: {
            en: 'Medium Impact',
            pt: 'Médio Impacto',
          },
          value: 'mediumImpact',
        },
        {
          label: {
            en: 'Low Impact',
            pt: 'Baixo Impacto',
          },
          value: 'lowImpact',
        },
      ],
    },
    richText({
      admin: {
        elements: ['h1', largeBody, label, 'link'],
        leaves: [],
      },
    }),
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
}
