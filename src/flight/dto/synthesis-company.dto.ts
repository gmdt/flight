import { ApiProperty } from '@nestjs/swagger';
import { CompanyName } from '../../enums/company-name';

export class SynthesisCompanyDTO {
  @ApiProperty()
  companyName?: CompanyName;
  @ApiProperty()
  nbFlights?: number;
}
