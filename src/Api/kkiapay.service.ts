import { openKkiapayWidget } from "kkiapay"

export const openingKKkiaWidget = (email : string) => {
   const url = `successRedirectUrl=${process.env.NEXT_PUBLIC_SUCCESS_URL}&failureRedirectUrl=${process.env.NEXT_PUBLIC_FAIL_URL}`

   openKkiapayWidget({
      amount: 1,
      api_key: process.env.NEXT_PUBLIC_KKIPAY_KEY,
      email: email,
      callback: `http://127.0.0.1:5010/api/v1/payments/KkiaPay/callBack?${url}`,
      theme:"#000000"
   })
}