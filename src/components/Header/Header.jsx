import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
// import { ReactComponent as Atom } from "../../assets/atom.svg";
import { ReactComponent as Osmosis } from '../../assets/osmosis.svg';
import { ReactComponent as Discord } from '../../assets/discord.svg';
import { Button, Modal, Input, Typography } from 'antd';
import { useAccount, useActiveChain, useDisconnect, useSuggestChainAndConnect, useBalances } from 'graz';
import { Bech32Address } from '@keplr-wallet/cosmos';

import './Header.css';
// import Paragraph from 'antd/es/skeleton/Paragraph';


const { Paragraph } = Typography;

const QWOYN = {
  coinDenom: 'QWOYN',
  coinMinimalDenom: 'uqwoyn',
  coinDecimals: 6,
  coinGeckoId: 'unknown',
  coinImageUrl: 'https://avatars.githubusercontent.com/u/91175924?s=100&v=4',
};

const qwoynTestnet = {
  rpc: 'http://66.42.74.12:26657',
  rest: 'http://66.42.74.12:1317',
  chainId: 'earendel-1',
  chainName: 'qwoyn',
  bip44: {
    coinType: 118,
  },
  stakeCurrency: QWOYN,
  bech32Config: Bech32Address.defaultBech32Config('qwoyn'),
  currencies: [QWOYN],
  feeCurrencies: [QWOYN],
  feeCurrencies: {
    low: 0.01,
    average: 0.025,
    high: 0.03,
  },
  features: [],
};

const Header = () => {
  // [wallet Connection]
  const { data: account, isConnected, isConnecting, isDisconnected, isReconnecting } = useAccount();
  const { disconnect } = useDisconnect();
  const activeChain = useActiveChain();

  
// const address = 'cosmos1g3jjhgkyf36pjhe7u5cw8j9u6cgl8x929ej430';
  const { data:useBalance, isLoading } = useBalances();

  const { suggestAndConnect } = useSuggestChainAndConnect();
  const handleWalletConnection = () => {
    console.log('handle wallet connection called');
    if (isConnected) disconnect();
    else
      suggestAndConnect({
        chainInfo: qwoynTestnet,
      });
      console.log({useBalance, account})
  };

  // [/wallet Connection]

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>

      <div className="btns">
        <Button className="btn">
          <Discord />
          Discord support
        </Button>
        {activeChain && (
          <Button
            // onOk={handleOk}
            onClick={showModal}
            onCancel={handleCancel}
            className="popup_btn"
          >
            Deposit
          </Button>
        )}

        <Button onCancel={handleCancel} className="popup_btn" loading={isConnecting || isReconnecting} disabled={isConnecting || isReconnecting} onClick={handleWalletConnection}>
          {activeChain ? 'Disconnect' : 'Connect wallet'}
          {activeChain && (
            <Paragraph ellipsis={{ rows: 1 }} className="popup_btn">
              <code>{account.bech32Address}</code>
              {console.log({ account })}
            </Paragraph>
          )}
        </Button>
      </div>

      <Modal
        // onOk={handleOk}
        // title="Deposit ATOM"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="modal_content">
          <hr />
          <div>
            Balances:
            {isLoading ? (
              'Fetching balances...'
            ) : (
              <div>
                {useBalance?.map((coin) => (
                  <h3 key={coin.denom}>
                    {coin.amount} {coin.denom}
                  </h3>
                ))}
              </div>
            )}
          </div>
          <hr />
          <h2 className="title_text">Deposit QWOYN</h2>
          <div className="text_section">
            <h3>From Cosmosis to QWOYN...</h3>
            <h3>To Osmosis Testnet 5</h3>
          </div>
          <div className="logo_section">
            <div className="logo12">
              <Osmosis />
            </div>
            <div className="logo12">
              <Logo className="logo" />
            </div>
          </div>
          <div className="input_section">
            <Input className="input12" placeholder="Input" />
            <Input className="input12" placeholder="Input" />
          </div>
          <div className="text_section_02">
            <h2>Select Amount</h2>
            <h4 className="decription">Available on Osmosis and the data should be pulled from the wallet</h4>
          </div>
          <Input className="input_amount" placeholder="Input" />
          <div className="sub_section">
            <div>Estimated Time</div>
            <div>20 seconds</div>
          </div>
          <Button className="submit_btn">Deposit QWOYN</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
