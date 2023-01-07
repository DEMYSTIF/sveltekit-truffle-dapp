import { mycontract } from '$lib/instance';

export const actions = {
    default: async ({ request }) => {
        let inputData = await request.formData()
        let payload = Object.fromEntries(inputData)
        console.log(payload)
        let result = await mycontract.methods.certificateDetails(payload.fetchID).call()
        console.log(result)
        return {
            success: true,
            result: JSON.stringify(result)
        }
    }
};