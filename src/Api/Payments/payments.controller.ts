import { openingFedaModal } from "../Services/fedapay.service";
import { openingKkiaModal } from "../Services/kkiapay.service";
import { MethodName } from "./MethodeName";

export function payments (email: string, payment:  any) {

   const url = `successRedirectUrl=${process.env.NEXT_PUBLIC_SUCCESS_URL}&failureRedirectUrl=${process.env.NEXT_PUBLIC_FAIL_URL}`
   switch (payment.name) {
      case MethodName.kkiaPay:
         openingKkiaModal(email, `${payment.callBackUrl}?${url}`);
         break;

      case MethodName.fedaPay:
         openingFedaModal(email, payment.callBackUrl)
         break

      default:
         break;
   }

}