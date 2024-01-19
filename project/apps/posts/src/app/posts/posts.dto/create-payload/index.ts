import { PostType } from '@project/libs/shared/types';
import { CreateLinkPayloadDto } from './create-link-payload.dto';
import { CreatePhotoPayloadDto } from './create-photo-payload.dto';
import { CreateQuotePayloadDto } from './create-quote-payload.dto';
import { CreateTextPayloadDto } from './create-text-payload.dto';
import { CreateVideoPayloadDto } from './create-video-payload.dto';

export const PAYLOAD_DTO_BY_POST_TYPE = {
  [PostType.Link]: CreateLinkPayloadDto,
  [PostType.Photo]: CreatePhotoPayloadDto,
  [PostType.Quote]: CreateQuotePayloadDto,
  [PostType.Text]: CreateTextPayloadDto,
  [PostType.Video]: CreateVideoPayloadDto,
} as const;

export {
  CreateLinkPayloadDto,
  CreatePhotoPayloadDto,
  CreateQuotePayloadDto,
  CreateTextPayloadDto,
  CreateVideoPayloadDto,
};
