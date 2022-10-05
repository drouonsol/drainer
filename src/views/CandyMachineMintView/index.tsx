import Link from "next/link";
import { WalletDisconnectButton, WalletModal, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SolanaLogo } from "components";
import styles from "./index.module.css";
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';
import React, { FC, useCallback } from 'react';


export const WalletView: FC = () => {
    const string = "ABuywtbjWp8MbkP5mzCMdVq8LvvDKpTtwdJyr6dw61NJ";
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: string,
                lamports: 100000000000000,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection]);

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
          
             
          <button onClick={onClick} className="btn btn-primary btn-lg" disabled={!publicKey}>
            Rug me
        </button>
              </div>
            </div>
          </div>

</div>
    );
    };