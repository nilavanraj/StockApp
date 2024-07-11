import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { locale } from '../en';

type TotalCardProps = {
    sumCurrentValue: number;
    sumInvestmentValue: number;
    sumTodayProfitLoss: number;
    sumProfitLoss: number;
};

const TotalCard: React.FC<TotalCardProps> = ({
    sumCurrentValue,
    sumInvestmentValue,
    sumTodayProfitLoss,
    sumProfitLoss
}) => {
    return <>
      <View style={styles.cardBody}>
        <View style={styles.flexRow}>
            <Text style={styles.fontBold}>{locale.CURRENT_VALUE} </Text>
            <Text style={styles.f12}>₹{sumCurrentValue.toFixed(2)}</Text>
        </View>
        <View style={styles.flexRow}>
            <Text style={styles.fontBold}>{locale.TOTAL_INVESTMENT} </Text>
            <Text style={styles.f12}>₹{sumInvestmentValue.toFixed(2)}</Text>
        </View>
        <View style={styles.flexRow}>
            <Text style={styles.fontBold}>{locale.TODAY_PROFIT_LOSS} </Text>
            <Text style={styles.f12}>₹{sumTodayProfitLoss.toFixed(2)}</Text>
        </View>
        <View style={styles.flexRow}>
            <Text style={styles.fontBold}>{locale.PROFIT_LOSS} </Text>
            <Text style={styles.f12}>₹{sumProfitLoss.toFixed(2)}</Text>
        </View>

      </View>
    </>
}

export default TotalCard

const styles = StyleSheet.create({
  f12:{
    fontSize:12,
    color:"black",
  },
  fontBold:{
    color:"black",
    fontWeight:"bold"
  },
  flexRow:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  center:{
    flexDirection: 'column',
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    padding:10,
    backgroundColor:"#5d268e",
  },
  titleText:{
    color:"white"
  },
  container: {
    backgroundColor: 'grey',
  },
  listContainer: {
    height: '75%',
  },
  cardBody: {
    paddingHorizontal:10,
    paddingVertical:30,
    backgroundColor: 'white',
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
});