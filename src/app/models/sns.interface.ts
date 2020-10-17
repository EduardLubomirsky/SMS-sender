export interface SendSmsRequestBody {
    message: string;
    phoneNumber: string;
}

export interface SendSmsRequestResponse {
    message: string;
    phoneNumber: string;
    messageId: string;
}
