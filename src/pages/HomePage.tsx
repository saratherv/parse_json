import React, {Component} from "react";
import games from '../games.json'
import Card from "@material-ui/core/Card";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Button } from "@material-ui/core";



interface IAppState {
    likes: any[]; // change it for your type
    loading: boolean;
  }
  
  interface IAppProps {
    // your props
  }

   
class HomePage extends Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
          likes: [],
          loading: false,
        };
      }

      public componentDidMount() {
      }

      saveLike = (e:any) => {
        var likes:any = localStorage.getItem(e)
        if(likes === null){
          localStorage.setItem(e, "1")
        }
        else{
          var y: number = +likes;
          y = y +1
          localStorage.setItem(e, String(y))
        }
        window.location.reload();
      }

      resetLike = (e:any) => {
        localStorage.setItem(e, "0")
        window.location.reload();
      }
   
    render() {
        return (
            <div className="App">
            <Card>
            <table className="table table-bordered">
                  <thead className="thead-light">
                  <tr>  
                    
                    <th> Name </th>
                    <th> ROM </th>
                    <th> PLAYERS </th>
                    <th> LIKES </th>
                    <th> Image </th>
                    <th> Total Likes </th>
                    <th> RESET </th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      games.games.map((game, index) =>{
                        return (<tr>
                          
                          <td> {game.name} </td>
                          <td> {game.rom} </td>
                          <td> {game.players} </td>
                          <td>  <Button onClick={ () => this.saveLike(game.name) } id={game.name} > <ThumbUpIcon /> </Button> </td>
                          <td> <img src= {game.image}></img> </td>
                          <td> {localStorage.getItem(game.name)} </td>
                          <td> <Button onClick={ () => this.resetLike(game.name) } id={game.name} > Reset </Button>  </td>
                        </tr>)
                      }  )
                    }
                  </tbody>
                  </table>
            </Card>
          </div>
        );
    }
}
   
export default HomePage;

