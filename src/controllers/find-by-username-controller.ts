import { Request, Response } from "express";
import { FindByUsernameUseCase } from "../usecases";

export class FindByUsernameController {
  constructor(private findByUsernameUseCase: FindByUsernameUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    const user = await this.findByUsernameUseCase.execute(username);
    return response
      .status(200)
      .json({ messsage: "Profile found successfully!", profile: user });
  }
}
