import { ExtractGithubNickPipe } from './extract-github-nick.pipe'

describe('ExtractGithubNickPipe', () => {
  it('create an instance', () => {
    const pipe = new ExtractGithubNickPipe()
    expect(pipe).toBeTruthy()
  })
})
