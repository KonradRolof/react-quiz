// https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
class QuizResultsApiService {
  private requestInit: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  public getAll(): Promise<any> {
    return fetch(process.env.REACT_APP_API_RESULTS_GET_ALL as string, this.requestInit)
      .then((response: any) => response.json())
      .then((response) => {
        return response;
      });
  }
}

export default QuizResultsApiService;
