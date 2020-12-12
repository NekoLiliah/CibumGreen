import styled from "styled-components";

const Wrapper = styled.div`
  background-color: violet;
  text-align: center;

  .App-logo {
    height: 150px;
    pointer-events: none;
  }
  .App-logo-react {
    height: 100px;
    pointer-events: none;
  }
  .testoWhite {
    color: white;
    font-size: 15px;
    margin-top: -15px;
  }
  #titolo1 {
    border: 1px solid white;
    padding: 10px;
    border-radius: 0px 0px 20px;
  }
  footer {
    background-color: rgb(131, 20, 20);
    color: white;
    padding: 20px 0px;
  }
  .btn {
    background-color: #88461d;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
  }

  .btn2 {
    color: white;
    /* padding: 10px 20px; */
    cursor: pointer;
    border-radius: 28px;
    width: 100px;
    display: inline-block;
    margin: 10px;
    padding: 10px 0px;
  }
  .paragrafo {
    width: 80%;
    margin: auto;
    font-size: 18px;
    border: 1px solid white;
    padding: 10px;
  }
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin 1s ease-out;
    }
  }

  .App-header {
    background-color: #e0902c;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: white;
    text-decoration: none;
    background-color: #88461d;
    padding: 10px 30px;
    border-radius: 7px;
    font-size: 15px;
    font-weight: bold;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
