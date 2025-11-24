import { BaseRange, BaseText } from '@deepnote/slate'
import { ReactEditor } from './plugin/react-editor'

declare module '@deepnote/slate' {
  interface CustomTypes {
    Editor: ReactEditor
    Text: BaseText & {
      placeholder?: string
    }
    Range: BaseRange & {
      placeholder?: string
      multiBlock?: boolean
    }
  }
}
