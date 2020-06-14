export class UserData {
  private id: number
  private name: string
  private age: number

  constructor(
    id: number,
    name: string,
    age: number
  ) {
    this.id = id
    this.name = name
    this.age = age
  }
}

export class User {
  public success: boolean
  public message: string
  public data?: UserData[]

  constructor(
    success: boolean,
    message: string,
    data?: UserData[]
  ) {
    this.success = success
    this.message = message
    this.data = data
  }
}
