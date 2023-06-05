import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { query, collection, where, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../../config/firebase-config';

import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner';
import CurrencyCard from './CurrencyCard';

const MyCurrenciesModal = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const myWallet = useSelector((state) => state.myWallet);
  const isDemo = useSelector((state) => state.user.isDemo);

  useEffect(() => {
    // setting data for wallet for when user picks demo mode
    if (isDemo) {
      setData(myWallet);
      setLoading(false);
    }

    // setting data for wallet for when user logs in via google
    const unsubscribeAuth = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser && !isDemo) {
        const walletssRef = collection(db, 'wallets');

        const queryWallets = query(walletssRef, where('user', '==', firebaseUser.uid));

        const unsubscribeSnapshot = onSnapshot(queryWallets, (snapshot) => {
          let currencies = [];
          snapshot.forEach((doc) => {
            currencies.push({ ...doc.data(), id: doc.id });
          });
          setData(currencies[0]);
          setLoading(false);
        });

        // Cleanup for snapshot listener
        return () => {
          unsubscribeSnapshot();
        };
      }
    });

    // Cleanup for auth state change listener
    return () => {
      unsubscribeAuth();
    };
  }, [myWallet]);

  if (loading) {
    return (
      <Card className="px-1 border-round-xl flex justify-content-center align-items-center w-12 lg:w-8 font-light border-solid border-yellow-300 surface-ground">
        <ProgressSpinner />
      </Card>
    );
  }

  return (
    <Card className="px-1 border-round-xl w-12 lg:w-8 font-light border-solid border-yellow-300 surface-ground">
      <div className="lg:flex justify-content-between">
        <p className="lg:w-7 sm:w-12 text-2xl mb-2 lg:mb-4 p-0">My wallet</p>
      </div>
      <div className="flex gap-3 overflow-x-auto ">
        <CurrencyCard
          img={'PLN'}
          alt={'image of PLN zloty'}
          title={'Polish Złoty'}
          value={data ? data.PLN : 0}
          sign={'ZŁ'}
        />
        <CurrencyCard
          img={'EUR'}
          alt={'image of EURO'}
          title={'Euro'}
          value={data ? data.EUR : 0}
          sign={'€'}
        />
        <CurrencyCard
          img={'USD'}
          alt={'image of US Dollar'}
          title={'American Dollar'}
          value={data ? data.USD : 0}
          sign={'$'}
        />
        <CurrencyCard
          img={'GBP'}
          alt={'image of GB Pound'}
          title={'British Pound'}
          value={data ? data.GBP : 0}
          sign={'£'}
        />
      </div>
    </Card>
  );
};

export default MyCurrenciesModal;
