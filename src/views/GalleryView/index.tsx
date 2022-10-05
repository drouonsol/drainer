import Link from "next/link";
import { FC, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { useConnection } from "@solana/wallet-adapter-react";

import { Loader, SolanaLogo, SelectAndConnectWalletButton } from "components";
import { NftCard } from "./NftCard";
import styles from "./index.module.css";
import { Http2ServerRequest } from "http2";
const walletPublicKey = "3SgV1dMLaFtRDF2cvxqdZFtdk8h6asE8cMmwgY58XJyb";

export const GalleryView: FC = ({}) => {
  const { connection } = useConnection();
  const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey);
  const { publicKey } = useWallet();

  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey,
    connection,
  });

  console.log("nfts", nfts);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWalletToParsePublicKey(value.trim());
  };

  const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };

  return (
<div className={styles.container}>
    <div style={{backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/922204296299315301/Untitled_Artwork.png" + ")", fontFamily: "Skrapbook",}} >
          <div style={{height: "30vh", backgroundColor:"",  justifyContent: "center",
      display: "flex",
        textAlign: 'center',
        fontSize: "60px",
        flexDirection: "column",
        fontFamily: "Skrapbook",
        padding: "50px",
        }}>
                      <div style={{justifyContent: "right",
      display: "flex",
        textAlign: 'center',
        fontSize: "50px",
        margin: "20px",
        padding: "10px",
        height: "50vh"
        }}
        >
          
          <a  href="./" className="" style={{backgroundColor:"transparent",}}>Go back</a>
                        </div>
          <a href="https://degenbears.com">Degen Bear<a style={{fontSize: "15px"}}> hub</a></a>
          <br />
          <div style={{justifyContent: "center",
      display: "flex",
        textAlign: 'center',
        }}>
           <SelectAndConnectWalletButton
                            onUseWalletClick={onUseWalletClick}></SelectAndConnectWalletButton>
    </div>

      </div>
      
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0" >
      

          <div className="flex-none">

          </div>
        </div>

        <div className="text-center pt-2">
          <div className="hero min-h-16 p-0 pt-10"  >
            <div className="text-center hero-content w-full" style={{backgroundImage: "url(" + "https://cdn.discordapp.com/attachments/875370923954430013/922563686659407882/Untitled_Artwork.png" + ")",padding: "50px",width:"1100px"}}>
              <div className="w-full">
                <h1 className="mb-5 text-5xl">
                  
                </h1>
                <input
                            type="text"
                            placeholder="Enter Wallet Address"
                            className="w-full input input-bordered input-lg"
                            value={walletToParsePublicKey}
                            onChange={onChange}
                   
                          />

                <div className="w-full min-w-full" >
                  <div>
                    <div className="form-control mt-8" >
                     
                    </div>
                  </div>
                </div>
                <div className="my-10">
                  {error ? (
                    <div>
                      <h1>Error Occures</h1>
                      {(error as any)?.message}
                    </div>
                  ) : null}

                  {!error && isLoading ? (
                    <div>
                      <Loader />
                    </div>
                  ) : (
                    <NftList nfts={nfts} error={error} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type NftListProps = {
  nfts: NftTokenAccount[];
  error?: Error;
};

const NftList = ({ nfts, error }: NftListProps) => {
  if (error) {
    return null;
  }

  if (!nfts?.length) {
    return (
      <div className="text-center text-2xl pt-16">
        No NFTs found in this wallet
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
      {nfts?.map((nft) => (
        <NftCard key={nft.mint} details={nft} onSelect={() => {}} />
      ))}
    </div>
  );
};
