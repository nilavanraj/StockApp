import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserHolding } from '../dataType/stockType';
import { locale } from '../en';

const StockCard = ({ item }: { item: UserHolding }) => {
  const currentValue = item?.ltp * item?.quantity ?? 0;
  const investmentValue = item?.avgPrice * item?.quantity ?? 0;
  const profitLoss = currentValue - investmentValue ?? 0;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text style={styles.quantity}>{item.quantity}</Text>
        </View>
        <View style={styles.flexEnd}>
          <Text style={styles.f12}>{locale.LTP} <Text style={styles.bold}>₹{item.ltp.toFixed(2)}</Text></Text>
          <Text style={styles.f12}>{locale.PL} <Text style={styles.bold}>₹{profitLoss.toFixed(2)}</Text></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  symbol: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  quantity: {
    fontSize: 12,
    color: 'grey',
  },
  bold: {
    fontWeight: 'bold',
  },
  f12: {
    fontSize: 12,
    color: 'black',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
});

export default StockCard;
