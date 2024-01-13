import { PostType } from '@project/libs/shared/types';
import { LinkPayloadRdo } from './link-payload.rdo';
import { PhotoPayloadRdo } from './photo-payload.rdo';
import { QuotePayloadRdo } from './quote-payload.rdo';
import { TextPayloadRdo } from './text-payload.rdo';
import { VideoPayloadRdo } from './video-payload.rdo';

export const PAYLOAD_RDO_BY_POST_TYPE = {
  [PostType.Link]: LinkPayloadRdo,
  [PostType.Photo]: PhotoPayloadRdo,
  [PostType.Quote]: QuotePayloadRdo,
  [PostType.Text]: TextPayloadRdo,
  [PostType.Video]: VideoPayloadRdo,
} as const;

export {
  LinkPayloadRdo,
  PhotoPayloadRdo,
  QuotePayloadRdo,
  TextPayloadRdo,
  VideoPayloadRdo,
};
