import { openKkiapayWidget } from "kkiapay"

export const openingKKkiaWidget = (email : string) => {
   const url = `successRedirectUrl=${process.env.NEXT_PUBLIC_SUCCESS_URL}&failureRedirectUrl=${process.env.NEXT_PUBLIC_FAIL_URL}`

   openKkiapayWidget({
      amount: 1,
      api_key: process.env.NEXT_PUBLIC_KKIPAY_KEY,
      email: email,
      callback: `https://7140-2c0f-2a80-fc-8610-f04d-c11a-3505-973.ngrok-free.app/api/v1/payments/kkiapay/callback?${url}`,
      theme:"#000000"
   })
}