import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";
import styles from "./index.module.css";

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  return (

    <div  style={{backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/924637477724102656/Untitled_Artwork_7.png" + ")", fontFamily: "Skrapbook",justifyContent: "center",
    display: "flex",
      textAlign: 'center',
      flexDirection: "column",}}>
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box" style={{backgroundColor: "rgba(25,25,25,0.6)"}}>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl">🐻</span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Degen Hub</span>
          </div>
          <div className="flex-none">
          <WalletMultiButton className="btn btn-ghost" style={{color:"black", backgroundColor: "white", fontFamily: "Skrapbook"}}/>
          </div>
        </div>

    <div style={{color:"black",            justifyContent: "center",
      display: "flex",
        textAlign: 'center',
        height: "86.379999vh",
        flexDirection: "column",
          padding: "200px"}}>
          
             
                <h1 className="mb-5 text-5xl font-bold" style={{color:"black",          display: "flex",
          textAlign: 'center',
          fontWeight: 'bold',
          flexDirection: "column",
          justifyContent: "center",}}>
                  Degen Bear Hub
                </h1>
                <p>
                  <h2 style={{fontSize: "30px"}}>
                    The Hub for all the utilities created by the Degen Bear Club
                    </h2>
                  {publicKey ? <>Logged in as: "{publicKey.toBase58()}"</>: null}
                  <div style={{padding: "20px", margin: "0px"}}>
                    <a href="./gallery" className="btn btn-primary btn-lg" > NFT viewer  </a><h1 style={{color:"green"}}>Online</h1>

                    </div>
                    <div style={{padding: "10px", margin: "0px"}}>
                    <a href="./" className="btn btn-primary btn-lg" style={{}} >Mint</a><h1 style={{color:"red"}}>Offline</h1>
                    </div>
                    <div style={{padding: "10px", margin: "0px"}}>
                    <a href="./" className="btn btn-primary btn-lg" >Staking</a><h1 style={{color:"red"}}>Offline</h1>
                    </div>
                    </p>
                    <div style={{fontSize: "30px"}}>
                                    
                      </div>
              </div>
            </div>
          </div>

</div>
    
 
  );
};
