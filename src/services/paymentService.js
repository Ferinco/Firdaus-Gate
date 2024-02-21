import { supportApi } from "../api/axios";

export const PaymentService = {
  postRefernce: async (reference, transaction, firstName, surname, gender, presentClass, classOfInterest, dayOrBoarding, parentEmailAddress, parentPhoneNumber) => {
    const { data } = await supportApi.post("api/paymentreference", {reference, transaction, firstName, surname, gender, presentClass, classOfInterest, dayOrBoarding, parentEmailAddress, parentPhoneNumber});
    return data;
  },
  checkReference: async (reference) => {
    const { data } = await supportApi.get("/api/confirmpayment/reference", {reference});
    return data;
  },
}