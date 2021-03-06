import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { EmployerRecommendationPage } from './employer-recommendation';

import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    EmployerRecommendationPage
  ],
  imports: [
    ComponentsModule,
    StarRatingModule,
    IonicPageModule.forChild(EmployerRecommendationPage),
    TranslateModule.forChild()
  ]
})
export class EmployerRecommendationPageModule {}