// https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
import QuestionInterface from '../interfaces/question.interface';

class UserResultsApiService {
  private requestInit: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  public post(answeredQuestions: Array<QuestionInterface>): Promise<any> {
    const requestInit = {
      ...this.requestInit,
      ...{
        method: 'POST',
        body: JSON.stringify(answeredQuestions)
      }
    };
    return fetch('/api/user-results', requestInit)
      .then((response: any) => response.json())
      .then((response) => {
        return response;
      });
  }
}

export default UserResultsApiService;
