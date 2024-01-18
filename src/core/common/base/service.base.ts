export interface BaseServiceContract<Input, Output> {
  execute(input: Input): Promise<Output>
}
