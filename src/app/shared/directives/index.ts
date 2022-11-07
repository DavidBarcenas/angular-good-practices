import {
  MessageContentDirective,
  MessageTitleDirective,
} from '../components/content/message/message.component';
import {
  ModalContentDirective,
  ModalHighlightDirective,
} from '../components/popups/modal/modal.component';
import { TooltipMessageDirective } from '../components/popups/tooltip/tooltip.component';
import { AutofocusDirective } from './autofocus.directive';
import { CurrencyDirective } from './currency.directive';
import { MarkFormTouchedDirective } from './mark-form-touched.directive';

export const directives = [
  MarkFormTouchedDirective,
  AutofocusDirective,
  CurrencyDirective,
  TooltipMessageDirective,
  ModalContentDirective,
  ModalHighlightDirective,
  MessageTitleDirective,
  MessageContentDirective,
];