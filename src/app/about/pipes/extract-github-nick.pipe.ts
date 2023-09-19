import { Pipe, type PipeTransform } from '@angular/core'

@Pipe({
  name: 'extractGithubNick',
})
export class ExtractGithubNickPipe implements PipeTransform {
  public transform(githubLink: string): string {
    const githubNick = githubLink.split('/').pop()

    if (!githubNick) {
      return ''
    }

    return `@${githubNick}`
  }
}
