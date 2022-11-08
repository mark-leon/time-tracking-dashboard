import TimeBox from "./components/card/TimeBox";
import Profile from "./components/profile/Profile";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    //fontWeight: "bold",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TimeBox></TimeBox>
        <Profile></Profile>
      </div>
    </ThemeProvider>
  );
}

export default App;
