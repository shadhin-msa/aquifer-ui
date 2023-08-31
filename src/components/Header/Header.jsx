import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
// import { ReactComponent as Atom } from "../../assets/atom.svg";
import { ReactComponent as Osmosis } from "../../assets/osmosis.svg";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { Button, Modal, Input } from "antd";

import "./Header.css";

const Header = () => {
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
        <Button
          // onOk={handleOk}
          onClick={showModal}
          onCancel={handleCancel}
          className="popup_btn"
        >
          Connect wallet
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
            <h4 className="decription">
              Available on Osmosis and the data should be pulled from the wallet
            </h4>
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
