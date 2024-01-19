export interface SignupUserParams {
  email: string
  password: string
  confirm_password: string
}

export interface SignupUserReturnTypes {
  id: string
  success: boolean
}

export interface ISignupUserRepository {
  signupUser(params: SignupUserParams): Promise<SignupUserReturnTypes>
}
