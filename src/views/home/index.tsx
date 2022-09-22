// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-10">
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">CryptoSyke</h3>
            <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">Accumulator 5+</span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">syke.theblxckout.sol</p>
        </div>
        <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="cryptosyke.png" height="30" width="30" alt=""></img>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a href="mailto:janecooper@example.com" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <img src="twitter.png" height="20" width="20"></img>
              <span className="ml-3">Follow</span>
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a href="tel:+1-202-555-0170" className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <img src="discord.png" height="20" width="20"></img>
              <span className="ml-3">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </li>
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">Interstellar Wanderess</h3>
            <span className="inline-block flex-shrink-0 rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">Magnate 50+</span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">interstellar.theblxckout.sol</p>
        </div>
        <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="interstellar.png" height="30" width="30" alt=""></img>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a href="mailto:janecooper@example.com" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <img src="twitter.png" height="20" width="20"></img>
              <span className="ml-3">Follow</span>
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a href="tel:+1-202-555-0170" className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <img src="discord.png" height="20" width="20"></img>
              <span className="ml-3">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </li>
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">ZK Redeyes</h3>
            <span className="inline-block flex-shrink-0 rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">Magnate 50+</span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">zkredeyes.theblxckout.sol</p>
        </div>
        <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="zkredeyes.png" height="30" width="30" alt=""></img>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a href="mailto:janecooper@example.com" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <img src="twitter.png" height="20" width="20"></img>
              <span className="ml-3">Follow</span>
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a href="tel:+1-202-555-0170" className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <img src="discord.png" height="20" width="20"></img>
              <span className="ml-3">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </li>
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">Ste</h3>
            <span className="inline-block flex-shrink-0 rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">Magnate 50+</span>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">stephn.theblxckout.sol</p>
        </div>
        <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="ste.png" height="30" width="30" alt=""></img>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a href="mailto:janecooper@example.com" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <img src="sol-logo.png" height="20" width="20"></img>
              <span className="ml-3">Transfer</span>
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a href="tel:+1-202-555-0170" className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <img src="discord.png" height="20" width="20"></img>
              <span className="ml-3">Discord</span>
            </a>
          </div>
        </div>
      </div>
    </li>
    </ul>
  );
};
