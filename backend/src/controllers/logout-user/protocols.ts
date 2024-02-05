export interface LogoutUserParams {
  id: string
}
export interface LogoutUserReturn {
  success: boolean
}
export interface ILogoutUserRepository {
  logoutUser(params: LogoutUserParams): Promise<LogoutUserReturn>
}
