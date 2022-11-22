import { InFlightInfoBaseDTO } from './in-flight-info-base.dto';

export class InFlightInfoUpdateDto extends InFlightInfoBaseDTO {
  completedAt: Date;
}
