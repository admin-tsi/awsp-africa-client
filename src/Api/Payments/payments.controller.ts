import { openingFedaModal } from "../Services/fedapay.service";
import { openingKkiaModal } from "../Services/kkiapay.service";
import { MethodName } from "./MethodeName";


export function payments (email: string, payment:  any) {

   switch (payment.name) {
      case MethodName.kkiaPay:
         openingKkiaModal(email, payment.callback);
         break;

      case MethodName.fedaPay:
         openingFedaModal(email, payment.callback)
         break

      default:
         break;
   }

}