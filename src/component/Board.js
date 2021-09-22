import React from 'react';
import {AccountContext} from '../context.js'

class Board extends React.Component {
    constructor(props){
      super(props);
    }
  
    render(){
      return (
        <AccountContext.Consumer>{context => (
            <div className="inner cover board">
              <div className="row info-row">
                <div className="col">
                  Total Warriors:  {context.accountStore.getState().totalWarriors}
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div className="card" id="etheteum-card">
                    <img className="card-img-top" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDgwIDI3MC42Ij48dGl0bGU+ZXRoZXJldW0tZXRoLWxvZ28tZnVsbC1ob3Jpem9udGFsPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGQ9Ik0zMDYuMiwxNTUuN2EzLjU2LDMuNTYsMCwwLDEtMy42LDMuNUgyMzYuM2MxLjcsMTYuNCwxNCwzMS40LDMxLjQsMzEuNCwxMS45LDAsMjAuNy00LjUsMjcuMy0xNGEzLjU4LDMuNTgsMCwwLDEsMi45LTEuNywzLjIxLDMuMjEsMCwwLDEsMy4zLDMuMywzLjEsMy4xLDAsMCwxLS41LDEuN2MtNi43LDExLjYtMjAsMTcuMy0zMywxNy4zLTIyLjMsMC0zOC4zLTIwLTM4LjMtNDEuM3MxNS45LTQxLjMsMzguMy00MS4zLDM4LjQsMTkuOCwzOC41LDQxLjFabS03LjEtMy4xYy0xLjQtMTYuNC0xNC0zMS40LTMxLjQtMzEuNHMtMjkuNywxNS0zMS40LDMxLjRaIiBzdHlsZT0iZmlsbDojM2IzYjNiIi8+PHBhdGggZD0iTTM4Ni44LDExNi4yYTMuNCwzLjQsMCwwLDEsMy4zLDMuMywzLjIxLDMuMjEsMCwwLDEtMy4zLDMuM0gzNjl2NjkuOWEzLjMzLDMuMzMsMCwwLDEtMy4zLDMuMywzLjQsMy40LDAsMCwxLTMuMy0zLjNWMTIyLjhIMzQ1LjNhMy4yMSwzLjIxLDAsMCwxLTMuMy0zLjMsMy4zMywzLjMzLDAsMCwxLDMuMy0zLjNoMTcuMVY5MC43YTMuNTUsMy41NSwwLDAsMSwzLTMuNSwzLjI3LDMuMjcsMCwwLDEsMy43LDMuM3YyNS43WiIgc3R5bGU9ImZpbGw6IzNiM2IzYiIvPjxwYXRoIGQ9Ik00OTUuMywxNTB2NDIuM2EzLjQsMy40LDAsMCwxLTMuMywzLjMsMy4yMSwzLjIxLDAsMCwxLTMuMy0zLjNWMTUwYzAtMTQuMy04LjEtMjguNS0yNC0yOC41LTIwLjQsMC0yOS4yLDE3LjgtMjgsMzYuMSwwLC41LjIsMi42LjIsMi45djMxLjdhMy41NSwzLjU1LDAsMCwxLTMsMy41LDMuMjcsMy4yNywwLDAsMS0zLjctMy4zVjUzLjNhMy4zMywzLjMzLDAsMCwxLDMuMy0zLjMsMy40LDMuNCwwLDAsMSwzLjMsMy4zdjc4LjZjNS43LTEwLjIsMTUuOS0xNy4xLDI3LjgtMTcuMSwxOS42LDAsMzAuNywxNy4xLDMwLjcsMzUuMloiIHN0eWxlPSJmaWxsOiMzYjNiM2IiLz48cGF0aCBkPSJNNjE0LjQsMTU1LjdhMy41NiwzLjU2LDAsMCwxLTMuNiwzLjVINTQ0LjVjMS43LDE2LjQsMTQsMzEuNCwzMS40LDMxLjQsMTEuOSwwLDIwLjctNC41LDI3LjMtMTRhMy41OCwzLjU4LDAsMCwxLDIuOS0xLjcsMy4yMSwzLjIxLDAsMCwxLDMuMywzLjMsMy4xLDMuMSwwLDAsMS0uNSwxLjdjLTYuNywxMS42LTIwLDE3LjMtMzMsMTcuMy0yMi4zLDAtMzguMy0yMC0zOC4zLTQxLjNzMTUuOS00MS4zLDM4LjMtNDEuM2MyMi4yLDAsMzguNCwxOS44LDM4LjUsNDEuMVptLTcuMi0zLjFjLTEuNC0xNi40LTE0LTMxLjQtMzEuNC0zMS40cy0yOS43LDE1LTMxLjQsMzEuNFoiIHN0eWxlPSJmaWxsOiMzYjNiM2IiLz48cGF0aCBkPSJNNjk1LjksMTE5LjNhMy4zNywzLjM3LDAsMCwxLTMuMSwzLjZjLTE5LjUsMi45LTI4LjMsMTguOC0yOC4zLDM3LjN2MzEuN2EzLjU1LDMuNTUsMCwwLDEtMywzLjUsMy4yNywzLjI3LDAsMCwxLTMuNy0zLjNWMTE5LjhhMy41NSwzLjU1LDAsMCwxLDMtMy41LDMuMjcsMy4yNywwLDAsMSwzLjcsMy4zdjE0LjdjNS41LTkuMywxNi40LTE4LjEsMjcuOC0xOC4xQzY5NCwxMTYuMiw2OTUuOSwxMTcuNCw2OTUuOSwxMTkuM1oiIHN0eWxlPSJmaWxsOiMzYjNiM2IiLz48cGF0aCBkPSJNODA0LjksMTU1LjdhMy41NiwzLjU2LDAsMCwxLTMuNiwzLjVINzM1YzEuNywxNi40LDE0LDMxLjQsMzEuNCwzMS40LDExLjksMCwyMC43LTQuNSwyNy4zLTE0YTMuNTgsMy41OCwwLDAsMSwyLjktMS43LDMuMjEsMy4yMSwwLDAsMSwzLjMsMy4zLDMuMSwzLjEsMCwwLDEtLjUsMS43Yy02LjcsMTEuNi0yMCwxNy4zLTMzLDE3LjMtMjIuMywwLTM4LjMtMjAtMzguMy00MS4zczE1LjktNDEuMywzOC4zLTQxLjMsMzguNCwxOS44LDM4LjUsNDEuMVptLTcuMS0zLjFjLTEuNC0xNi40LTE0LTMxLjQtMzEuNC0zMS40cy0yOS43LDE1LTMxLjQsMzEuNFoiIHN0eWxlPSJmaWxsOiMzYjNiM2IiLz48cGF0aCBkPSJNOTEyLjEsMTIwLjF2NzIuNmEzLjQsMy40LDAsMCwxLTMuMywzLjMsMy4yMSwzLjIxLDAsMCwxLTMuMy0zLjNWMTc4LjljLTUuNSwxMC45LTE1LjIsMTguOC0yNy42LDE4LjgtMTkuNywwLTMwLjYtMTcuMS0zMC42LTM1LjJWMTIwYTMuMzMsMy4zMywwLDAsMSwzLjMtMy4zLDMuNCwzLjQsMCwwLDEsMy4zLDMuM3Y0Mi41YzAsMTQuMyw4LjEsMjguNSwyNCwyOC41LDIyLjMsMCwyNy42LTIwLjksMjcuNi00NFYxMTkuOWEzLjM1LDMuMzUsMCwwLDEsNC41LTMuMSwzLjYzLDMuNjMsMCwwLDEsMi4xLDMuM1oiIHN0eWxlPSJmaWxsOiMzYjNiM2IiLz48cGF0aCBkPSJNMTA4MCwxNDkuN3Y0Mi41YTMuNCwzLjQsMCwwLDEtMy4zLDMuMywzLjIxLDMuMjEsMCwwLDEtMy4zLTMuM1YxNDkuN2MwLTE0LjMtOC4xLTI4LjMtMjQtMjguMy0yMCwwLTI3LjYsMjEuNC0yNy42LDM4djMyLjhhMy40LDMuNCwwLDAsMS0zLjMsMy4zLDMuMjEsMy4yMSwwLDAsMS0zLjMtMy4zVjE0OS43YzAtMTQuMy04LjEtMjguMy0yNC0yOC4zLTIwLjIsMC0yOC41LDE1LjktMjcuOCwzNy4xLDAsLjUuMiwxLjQsMCwxLjd2MzEuOWEzLjU1LDMuNTUsMCwwLDEtMywzLjUsMy4yNywzLjI3LDAsMCwxLTMuNy0zLjNWMTE5LjhhMy41NSwzLjU1LDAsMCwxLDMtMy41LDMuMjcsMy4yNywwLDAsMSwzLjcsMy4zdjEyLjFjNS43LTEwLjIsMTUuOS0xNi45LDI3LjgtMTYuOSwxMy41LDAsMjQsOC42LDI4LjMsMjEuMSw1LjUtMTIuNCwxNi4yLTIxLjEsMjkuOS0yMS4xLDE5LjUsMCwzMC42LDE2LjksMzAuNiwzNC45WiIgc3R5bGU9ImZpbGw6IzNiM2IzYiIvPjxwYXRoIGQ9Ik04MywxMDAuMSwwLDEzNy44bDgzLDQ5LjEsODMuMS00OS4xWiIgc3R5bGU9Im9wYWNpdHk6MC42MDAwMDAwMjM4NDE4NTc5O2lzb2xhdGlvbjppc29sYXRlIi8+PHBhdGggZD0iTTAsMTM3LjhsODMsNDkuMVYwWiIgc3R5bGU9Im9wYWNpdHk6MC40NDk5OTk5ODgwNzkwNzEwNDtpc29sYXRpb246aXNvbGF0ZSIvPjxwYXRoIGQ9Ik04MywwVjE4Ni45bDgzLjEtNDkuMVoiIHN0eWxlPSJvcGFjaXR5OjAuODAwMDAwMDExOTIwOTI5O2lzb2xhdGlvbjppc29sYXRlIi8+PHBhdGggZD0iTTAsMTUzLjZsODMsMTE3di02OFoiIHN0eWxlPSJvcGFjaXR5OjAuNDQ5OTk5OTg4MDc5MDcxMDQ7aXNvbGF0aW9uOmlzb2xhdGUiLz48cGF0aCBkPSJNODMsMjAyLjZ2NjhsODMuMS0xMTdaIiBzdHlsZT0ib3BhY2l0eTowLjgwMDAwMDAxMTkyMDkyOTtpc29sYXRpb246aXNvbGF0ZSIvPjwvZz48L2c+PC9zdmc+" alt=""/>
                  </div>
                </div>
                <div className="col input-group">
                  <input type="text" className="form-control" placeholder="rootErc721Address" id="rootErc721Input"/>
                  <input type="text" className="form-control" placeholder="tokenId" id="erc721TokenInput"/>
                  <button type="submit" className="btn btn-success" onClick={context.accountStore.deposit}>Stake</button>
                </div>
              </div>
              <div className="row gap-row"></div>
              <div className="row" id="polygon-row">
                <div className="col-3">
                  <div className="card" id="polygon-card">
                    <img className="card-img-top" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIyMjUiIHZpZXdCb3g9IjAgMCAxMDI0IDIyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik00MDAuNjEzIDcxLjY3MDlDNDA2Ljg5NSA3NS40Njg0IDQxMi4yMTEgODAuNjg5OSA0MTUuNTkzIDg3LjgxMDFDNDE5LjQ1OSA5NC45MzA0IDQyMS4zOTIgMTAzLjQ3NSA0MjEuMzkyIDExMi45NjhDNDIxLjM5MiAxMjIuNDYyIDQxOS40NTkgMTMwLjUzMiA0MTUuMTEgMTM3LjY1MkM0MTEuMjQ0IDE0NC43NzIgNDA1LjQ0NSAxNDkuOTk0IDM5OC4xOTYgMTUzLjMxNkMzOTAuOTQ4IDE1Ny4xMTQgMzgyLjI0OSAxNTkuMDEzIDM3My4wNjggMTU5LjAxM0MzNjcuNzUyIDE1OS4wMTMgMzYyLjkxOSAxNTguMDYzIDM1OC4wODcgMTU2LjE2NUMzNTMuMjU0IDE1NC43NDEgMzQ4LjkwNSAxNTEuODkyIDM0NS41MjIgMTQ4LjU3VjE5Ny45MzdIMzE3LjQ5NFY2Ny44NzM0SDM0MS42NTZMMzQ0LjA3MyA3OC4zMTY1QzM1NC43MDQgNjkuNzcyMiAzNjYuMzAyIDY1LjUgMzc4LjM4MyA2NS41QzM4Ni41OTggNjUuNSAzOTQuMzMgNjcuMzk4NyA0MDAuNjEzIDcxLjY3MDlaTTM4NS4xNDkgMTMwLjUzMkMzODkuOTgxIDEyNi4yNiAzOTIuMzk3IDEyMC41NjMgMzkyLjM5NyAxMTMuNDQzQzM5Mi4zOTcgMTA2LjMyMyAzODkuOTgxIDEwMC42MjcgMzg1LjYzMiA5NS44Nzk4QzM4MS4yODMgOTEuMTMyOSAzNzUuNDg0IDg5LjIzNDIgMzY5LjIwMiA4OS4yMzQyQzM2My44ODYgODkuMjM0MiAzNTkuMDUzIDkwLjE4MzYgMzU1LjE4NyA5Mi41NTdDMzUxLjMyMSA5NC40NTU3IDM0OC40MjIgOTcuNzc4NSAzNDYuMDA2IDEwMi4wNTFWMTIzLjQxMUMzNDcuNDU1IDEyNy42ODQgMzUwLjM1NSAxMzEuMDA2IDM1My43MzggMTMzLjM4QzM1Ny42MDQgMTM1Ljc1MyAzNjEuOTUzIDEzNy4xNzcgMzY3LjI2OSAxMzcuMTc3QzM3NC41MTcgMTM3LjE3NyAzODAuMzE2IDEzNC44MDQgMzg1LjE0OSAxMzAuNTMyWiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNNDM3LjgyMSA4OC4yNzVDNDQyLjE3MSA4MS42Mjk0IDQ0Ny45NjkgNzUuOTMzMiA0NTUuNzAxIDcyLjEzNTdDNDYzLjQzMyA2OC4zMzgzIDQ3Mi4xMzIgNjUuOTY0OCA0ODEuNzk3IDY1Ljk2NDhDNDkxLjQ2MiA2NS45NjQ4IDUwMC4xNiA2Ny44NjM2IDUwNy44OTIgNzIuMTM1N0M1MTUuMTQxIDc1LjkzMzIgNTIwLjk0IDgxLjYyOTQgNTI1LjI4OSA4OC43NDk2QzUyOS42MzggOTUuODY5OSA1MzEuNTcxIDEwMy40NjUgNTMxLjU3MSAxMTIuNDg0QzUzMS41NzEgMTIxLjUwMyA1MjkuNjM4IDEyOS4wOTggNTI1LjI4OSAxMzYuMjE4QzUyMC45NCAxNDMuMzM4IDUxNS42MjQgMTQ5LjAzNCA1MDcuODkyIDE1Mi44MzJDNTAwLjY0MyAxNTYuNjI5IDQ5MS40NjIgMTU5LjAwMyA0ODEuNzk3IDE1OS4wMDNDNDcyLjEzMiAxNTkuMDAzIDQ2My40MzMgMTU3LjEwNCA0NTUuNzAxIDE1My4zMDdDNDQ3Ljk2OSAxNDkuNTA5IDQ0Mi4xNzEgMTQ0LjI4OCA0MzcuODIxIDEzNy4xNjdDNDMzLjk1NSAxMzAuMDQ3IDQzMS41MzkgMTIxLjk3NyA0MzEuNTM5IDExMi40ODRDNDMxLjUzOSAxMDMuNDY1IDQzMy45NTUgOTUuMzk1MiA0MzcuODIxIDg4LjI3NVpNNDY2LjMzMyAxMjkuNTcyQzQ3MC4xOTkgMTM0LjMxOSA0NzUuNTE1IDEzNi4yMTggNDgxLjc5NyAxMzYuMjE4QzQ4OC4wNzkgMTM2LjIxOCA0OTMuMzk1IDEzMy44NDUgNDk3LjI2MSAxMjkuNTcyQzUwMS4xMjcgMTI1LjMgNTAzLjA2IDExOS4xMjkgNTAzLjA2IDExMi40ODRDNTAzLjA2IDEwNS4zNjQgNTAxLjEyNyA5OS42Njc0IDQ5Ny4yNjEgOTUuMzk1MkM0OTIuOTExIDkwLjY0ODQgNDg4LjA3OSA4OC4yNzUgNDgxLjMxNCA4OC4yNzVDNDc1LjAzMSA4OC4yNzUgNDcwLjE5OSA5MC42NDg0IDQ2NS44NSA5NC45MjA1QzQ2MS45ODQgOTkuNjY3NCA0NjAuMDUxIDEwNS4zNjQgNDYwLjA1MSAxMTIuNDg0QzQ2MC4wNTEgMTE5LjEyOSA0NjEuOTg0IDEyNC44MjYgNDY2LjMzMyAxMjkuNTcyWiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNNTc3LjAwMSAwLjQ2Mzg2N1YxNTYuNjM1SDU0OC45NzNWMC40NjM4NjdINTc3LjAwMVoiIGZpbGw9IiMyMTIxMjEiLz4KPHBhdGggZD0iTTY5Mi4wMSA3MC4yNDA1TDYzNC45ODcgMTk4LjQwNUg2MDcuOTI2TDYyOS4xODggMTUyLjM2MUw1ODguNTk2IDcwLjI0MDVINjIwLjQ5TDY0My42ODYgMTIxLjUwNkw2NjYuODgyIDcwLjI0MDVINjkyLjAxWiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNNzk5LjI4NyA3MC4yMzdWMTU2LjYyOUM3OTkuMjg3IDE2NC42OTkgNzk2Ljg3MSAxNzIuMjk0IDc5Mi4wMzggMTc4Ljk0Qzc4Ny4yMDYgMTg1LjU4NSA3ODAuOTIzIDE5MC44MDcgNzcyLjcwOCAxOTQuNjA0Qzc2NC40OTMgMTk4LjQwMiA3NTUuNzk1IDIwMC4zIDc0Ni4xMyAyMDAuM0M3MzguODgxIDIwMC4zIDczMi41OTkgMTk5LjM1MSA3MjcuMjgzIDE5Ny45MjdDNzIxLjk2NyAxOTYuMDI4IDcxNy42MTggMTk0LjEyOSA3MTQuMjM1IDE5Mi4yMzFDNzEwLjM3IDE4OS44NTcgNzA2LjUwNCAxODcuMDA5IDcwMi4xNTQgMTgzLjIxMkw3MTguNTg1IDE2NC4yMjRDNzIyLjQ1MSAxNjguMDIyIDcyNi44IDE3MC44NyA3MzAuNjY2IDE3Mi43NjlDNzM0LjUzMiAxNzQuNjY3IDczOS44NDggMTc2LjA5MSA3NDUuNjQ3IDE3Ni4wOTFDNzUyLjg5NSAxNzYuMDkxIDc1OC42OTQgMTc0LjE5MyA3NjMuNTI3IDE3MC44N0M3NjguMzU5IDE2Ny41NDcgNzcwLjc3NSAxNjIuMzI2IDc3MC43NzUgMTU2LjE1NVYxNDMuODEzQzc2Ny44NzYgMTQ4LjA4NSA3NjQuMDEgMTUxLjg4MyA3NTguMjExIDE1NC43MzFDNzUyLjQxMiAxNTcuNTc5IDc0NS42NDcgMTU5LjAwMyA3MzcuOTE1IDE1OS4wMDNDNzMwLjE4MyAxNTkuMDAzIDcyMi40NTEgMTU3LjEwNCA3MTUuNjg1IDE1Mi44MzJDNzA4LjkyIDE0OS4wMzQgNzAzLjYwNCAxNDMuMzM4IDY5OS4yNTUgMTM2LjIxOEM2OTUuMzg5IDEyOS4wOTggNjkyLjk3MyAxMjEuNTAzIDY5Mi45NzMgMTEyLjk1OUM2OTIuOTczIDEwNC40MTQgNjk0LjkwNiA5Ni4zNDQ2IDY5OS4yNTUgODkuMjI0M0M3MDMuNjA0IDgyLjEwNDEgNzA4LjkyIDc2LjQwNzkgNzE2LjE2OCA3Mi4xMzU3QzcyMi45MzQgNjcuODYzNiA3MzAuMTgzIDY1Ljk2NDggNzM3LjkxNSA2NS45NjQ4Qzc0NS4xNjMgNjUuOTY0OCA3NTEuNDQ1IDY2LjkxNDIgNzU3LjI0NCA2OC44MTI5Qzc2My4wNDMgNzAuNzExNyA3NjcuMzkzIDczLjU1OTggNzcwLjI5MiA3Ni44ODI2TDc3My4xOTIgNzAuMjM3SDc5OS4yODdaTTc3MC43NzUgMTIzLjQwMlYxMDIuMDQxQzc2OC44NDIgOTcuNzY4NyA3NjUuOTQzIDk0LjQ0NTkgNzYxLjU5NCA5Mi4wNzI0Qzc1Ny4yNDQgODkuNjk5IDc1Mi40MTIgODguMjc1IDc0Ni42MTMgODguMjc1QzczOS44NDggODguMjc1IDczNC4wNDkgOTAuNjQ4NCA3MjkuMjE2IDk0LjkyMDVDNzI0LjM4NCA5OS4xOTI3IDcyMS45NjcgMTA0Ljg4OSA3MjEuOTY3IDExMi4wMDlDNzIxLjk2NyAxMTguNjU1IDcyNC4zODQgMTI0LjgyNiA3MjkuMjE2IDEyOS41NzJDNzM0LjA0OSAxMzQuMzE5IDczOS44NDggMTM2LjY5MyA3NDYuNjEzIDEzNi42OTNDNzU3LjcyOCAxMzYuMjE4IDc2NS45NDMgMTMxLjk0NiA3NzAuNzc1IDEyMy40MDJaIiBmaWxsPSIjMjEyMTIxIi8+CjxwYXRoIGQ9Ik04MjIuNDkxIDg4LjI4NDhDODI2Ljg0IDgxLjE2NDYgODMyLjYzOSA3NS45NDMgODQwLjM3MSA3MS42NzA5Qzg0OC4xMDMgNjcuODczNCA4NTYuODAyIDY1LjUgODY2LjQ2NyA2NS41Qzg3Ni4xMzIgNjUuNSA4ODQuODMgNjcuMzk4NyA4OTIuNTYyIDcxLjY3MDlDODk5LjgxMSA3NS40Njg0IDkwNS42MSA4MS4xNjQ2IDkwOS45NTkgODguMjg0OEM5MTMuODI1IDk1LjQwNTEgOTE2LjI0MSAxMDMgOTE2LjI0MSAxMTIuMDE5QzkxNi4yNDEgMTIxLjAzOCA5MTQuMzA4IDEyOC42MzMgOTA5Ljk1OSAxMzUuNzUzQzkwNi4wOTMgMTQyLjg3MyA5MDAuMjk0IDE0OC41NyA4OTIuNTYyIDE1Mi4zNjdDODg1LjMxMyAxNTYuMTY1IDg3Ni4xMzIgMTU4LjUzOCA4NjYuNDY3IDE1OC41MzhDODU2LjgwMiAxNTguNTM4IDg0OC4xMDMgMTU2LjYzOSA4NDAuMzcxIDE1Mi44NDJDODMyLjYzOSAxNDkuMDQ0IDgyNi44NCAxNDMuODIzIDgyMi40OTEgMTM2LjcwM0M4MTguMTQyIDEyOS41ODIgODE2LjIwOSAxMjEuNTEzIDgxNi4yMDkgMTExLjU0NEM4MTYuMjA5IDEwMy40NzUgODE4LjE0MiA5NS40MDUxIDgyMi40OTEgODguMjg0OFpNODUwLjUyIDEyOS41ODJDODU0LjM4NiAxMzQuMzI5IDg1OS43MDEgMTM2LjIyOCA4NjUuOTgzIDEzNi4yMjhDODcyLjI2NiAxMzYuMjI4IDg3Ny41ODEgMTMzLjg1NCA4ODEuNDQ3IDEyOS41ODJDODg1LjMxMyAxMjUuMzEgODg3LjI0NiAxMTkuMTM5IDg4Ny4yNDYgMTEyLjQ5NEM4ODcuMjQ2IDEwNS4zNzMgODg1LjMxMyA5OS42NzcyIDg4MS40NDcgOTUuNDA1MUM4NzcuNTgxIDkxLjEzMjkgODcyLjI2NiA4OC43NTk1IDg2NS45ODMgODguNzU5NUM4NTkuNzAxIDg4Ljc1OTUgODU0Ljg2OSA5MS4xMzI5IDg1MC41MiA5NS40MDUxQzg0Ni4xNyA5OS42NzcyIDg0NC4yMzcgMTA1Ljg0OCA4NDQuMjM3IDExMi40OTRDODQ0LjcyMSAxMTkuMTM5IDg0Ni42NTQgMTI0LjgzNSA4NTAuNTIgMTI5LjU4MloiIGZpbGw9IiMyMTIxMjEiLz4KPHBhdGggZD0iTTEwMTUuMzEgNzMuMDg1MUMxMDIxLjExIDc3LjgzMTkgMTAyMy41MiA4NC4wMDI4IDEwMjQgOTEuNTk3OFYxNTYuNjI5SDk5NS40OTNWMTAyLjA0MUM5OTUuMDEgOTMuNDk2NSA5OTAuNjYxIDg5LjIyNDMgOTgyLjQ0NSA4OS4yMjQzQzk3Ni4xNjMgODkuMjI0MyA5NzAuODQ4IDkyLjA3MjQgOTY2Ljk4MiA5OC4yNDMzQzk2My4xMTYgMTA0LjQxNCA5NjEuMTgzIDExMi4wMDkgOTYxLjE4MyAxMjEuMDI4VjE1Ni42MjlIOTMzLjE1NFY3MC4yMzdIOTU4Ljc2Nkw5NjAuNjk5IDg0LjAwMjhDOTY0LjA4MiA3OC4zMDY2IDk2OC40MzEgNzQuMDM0NSA5NzQuMjMgNzAuNzExN0M5ODAuMDI5IDY3LjM4ODkgOTg2Ljc5NSA2NS45NjQ4IDk5NC41MjcgNjUuOTY0OEMxMDAyLjc0IDY1Ljk2NDggMTAwOS45OSA2OC4zMzgzIDEwMTUuMzEgNzMuMDg1MVoiIGZpbGw9IiMyMTIxMjEiLz4KPHBhdGggZD0iTTE5Ny42NDggNjguODIzN0MxOTIuODE1IDY1Ljk3NTYgMTg2LjUzMyA2NS45NzU2IDE4MS4yMTggNjguODIzN0wxNDMuNTI0IDkwLjY1OTJMMTE3LjkxMiAxMDQuOUw4MC4yMTkgMTI2LjczNUM3NS4zODY1IDEyOS41ODMgNjkuMTA0MyAxMjkuNTgzIDYzLjc4ODYgMTI2LjczNUwzMy44MjczIDEwOS42NDZDMjguOTk0OCAxMDYuNzk4IDI1LjYxMjEgMTAxLjU3NyAyNS42MTIxIDk1Ljg4MDdWNjIuMTc4MUMyNS42MTIxIDU2LjQ4MTkgMjguNTExNiA1MS4yNjA0IDMzLjgyNzMgNDguNDEyM0w2My4zMDUzIDMxLjc5ODRDNjguMTM3OCAyOC45NTAzIDc0LjQyIDI4Ljk1MDMgNzkuNzM1NyAzMS43OTg0TDEwOS4yMTQgNDguNDEyM0MxMTQuMDQ2IDUxLjI2MDQgMTE3LjQyOSA1Ni40ODE5IDExNy40MjkgNjIuMTc4MVY4NC4wMTM2TDE0My4wNDEgNjkuMjk4NFY0Ny40NjNDMTQzLjA0MSA0MS43NjY3IDE0MC4xNDIgMzYuNTQ1MiAxMzQuODI2IDMzLjY5NzFMODAuMjE5IDIuMzY4MDFDNzUuMzg2NSAtMC40ODAwOTIgNjkuMTA0MyAtMC40ODAwOTIgNjMuNzg4NiAyLjM2ODAxTDguMjE1MiAzMy42OTcxQzIuODk5NDggMzYuNTQ1MiAwIDQxLjc2NjcgMCA0Ny40NjNWMTEwLjU5NkMwIDExNi4yOTIgMi44OTk0OCAxMjEuNTE0IDguMjE1MiAxMjQuMzYyTDYzLjc4ODYgMTU1LjY5MUM2OC42MjEgMTU4LjUzOSA3NC45MDMzIDE1OC41MzkgODAuMjE5IDE1NS42OTFMMTE3LjkxMiAxMzQuMzNMMTQzLjUyNCAxMTkuNjE1TDE4MS4yMTggOTguMjU0MUMxODYuMDUgOTUuNDA2IDE5Mi4zMzIgOTUuNDA2IDE5Ny42NDggOTguMjU0MUwyMjcuMTI2IDExNC44NjhDMjMxLjk1OCAxMTcuNzE2IDIzNS4zNDEgMTIyLjkzOCAyMzUuMzQxIDEyOC42MzRWMTYyLjMzNkMyMzUuMzQxIDE2OC4wMzMgMjMyLjQ0MiAxNzMuMjU0IDIyNy4xMjYgMTc2LjEwMkwxOTcuNjQ4IDE5My4xOTFDMTkyLjgxNSAxOTYuMDM5IDE4Ni41MzMgMTk2LjAzOSAxODEuMjE4IDE5My4xOTFMMTUxLjc0IDE3Ni41NzdDMTQ2LjkwNyAxNzMuNzI5IDE0My41MjQgMTY4LjUwNyAxNDMuNTI0IDE2Mi44MTFWMTQwLjk3NkwxMTcuOTEyIDE1NS42OTFWMTc3LjUyNkMxMTcuOTEyIDE4My4yMjIgMTIwLjgxMiAxODguNDQ0IDEyNi4xMjcgMTkxLjI5MkwxODEuNzAxIDIyMi42MjFDMTg2LjUzMyAyMjUuNDY5IDE5Mi44MTUgMjI1LjQ2OSAxOTguMTMxIDIyMi42MjFMMjUzLjcwNSAxOTEuMjkyQzI1OC41MzcgMTg4LjQ0NCAyNjEuOTIgMTgzLjIyMiAyNjEuOTIgMTc3LjUyNlYxMTQuMzkzQzI2MS45MiAxMDguNjk3IDI1OS4wMiAxMDMuNDc2IDI1My43MDUgMTAwLjYyOEwxOTcuNjQ4IDY4LjgyMzdaIiBmaWxsPSIjODI0N0U1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIyMjUiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==" alt=""/>
                  </div>
                </div>
                <div className="col-9">
                </div>
              </div>
              <div className="row token-row">
                  <div className="col-6 row input-group token-input-form">
                      <div className="col input-group">
                          <input type="text" className="form-control" id="tokenInput" placeholder="TokenId" aria-label="TokenId" aria-describedby="button-addon"/>
                          <button type="submit" className="btn btn-outline-secondary" id="button-addon" onClick={context.accountStore.stake} >Register</button>
                      </div>
                  </div>
                  <div className="col-6 message-panel">Your Roles : {context.accountStore.getState().stakeTokens.join(',')}</div>
              </div>
              <div className="row stake-row">
                    <div className="col-3">
                      <input type="text" className="form-control" placeholder="tokenId" id="withdrawInput"/>
                    </div>
                    <div className="col-3">
                      <button className="btn btn-secondary" onClick={context.accountStore.withdraw}>WithDraw</button>
                    </div>
                    <div className="col-3">
                      <input type="text" className="form-control" placeholder="tokenId" id="battleInput"/>
                    </div>
                    <div className="col-3">
                      <button className="btn btn-primary" onClick={context.accountStore.battle}>Battle</button>
                    </div>
              </div>
              <div className="row panel-row">
                <div className="col-2"></div>
                <div className="col-8 central-panel">
                    acceptorAddress: {context.accountStore.getState().battleInfo ? context.accountStore.getState().battleInfo.acceptorAddress : ''} <br/>
                    challengerRanking: {context.accountStore.getState().battleInfo ? context.accountStore.getState().battleInfo.challengerRanking : ''} <br/>
                    acceptorRanking: {context.accountStore.getState().battleInfo ? context.accountStore.getState().battleInfo.acceptorRanking : ''} <br/>
                    failNumber: {context.accountStore.getState().battleInfo ? context.accountStore.getState().battleInfo.failNumber : ''} <br/>
                    result: {context.accountStore.getState().battleInfo ? (context.accountStore.getState().battleInfo.result ? 'Won' : 'Lose') : ''}
                </div>
                <div className="col-2"></div>
              </div>
              
              <div className="row claim-row">
                <div className="col">
                  Claimable: {context.accountStore.getState().bagld_to_claim > 0 ? context.accountStore.getState().bagld_to_claim : 0} BAGLD
                </div>
                <div className="col">

                  <button type="submit" className="btn btn-success" id="button-claim" onClick={context.accountStore.claimReward}>Claim</button>
                </div>
              </div>
            </div>
        )}
        </AccountContext.Consumer>
      );
    }
  }

export default Board;
