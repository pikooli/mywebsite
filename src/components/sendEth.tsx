import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Web3 from 'web3';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

const ETHPUBLIC = '0x343901374AdF3AFAc8EA1eC1Fb00a75F904eD48E';
const sendEth =
  'If you thing this is usefull, you can support me by sending some eth';

const transactionParameters = {
  to: ETHPUBLIC,
  from: '',
  value: '',
};

declare global {
  interface Window {
    ethereum: Obj;
  }
}

export default function SendEth() {
  const [provider, setProvider] = useState<Obj | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [txHash, setTxHash] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setProvider(window.ethereum);
    }
  }, []);

  if (!provider)
    return (
      <div className="card mb-3">
        <div className="card-body">
          {`${sendEth} at : ${ETHPUBLIC}`} <FontAwesomeIcon icon={faEthereum} />
        </div>
      </div>
    );

  const onClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    let currentAccount = account;
    if (!currentAccount) {
      const accounts = await provider.request({
        method: 'eth_requestAccounts',
      });
      if (!accounts.length || Number(input) <= 0) {
        return;
      }
      setAccount(accounts[0]);
      currentAccount = accounts[0] as string;
    }
    transactionParameters.from = currentAccount;
    transactionParameters.value = Web3.utils.toHex(Web3.utils.toWei(input));
    const txHash = await provider.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    setTxHash(txHash);
  };

  const TxHash = () => {
    if (!txHash) return <></>;
    return <div>TxHash is : {txHash}</div>;
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <form>
          <label className="mb-3">
            {sendEth} <FontAwesomeIcon icon={faEthereum} />
          </label>
          <div className="flex mt-2">
            <input
              type="number"
              value={input}
              min={0}
              onChange={e => {
                setInput(e.target.value);
              }}
              placeholder="0.001"
            />
            {/*  eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <button className="btn btn-primary" onClick={onClick}>
              <FontAwesomeIcon icon={faEthereum} />
            </button>
          </div>
        </form>
        <TxHash />
      </div>
    </div>
  );
}
