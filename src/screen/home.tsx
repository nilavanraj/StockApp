import React from 'react';
import { View, Text, ActivityIndicator, FlatList, SafeAreaView, StyleSheet, RefreshControl } from 'react-native';
import useUserData from '../hooks/useStockData';
import StockCard from '../components/stockCard';
import { locale } from '../en';
import TotalCard from '../components/totalCard';

const Home: React.FC = () => {
  const { 
    data,
    loading,
    error,
    sumCurrentValue,
    sumInvestmentValue,
    sumTodayProfitLoss, 
    sumProfitLoss,
    firstLoading,
    onRefresh 
  } = useUserData();

  if (loading && !firstLoading)
    return <View style={styles.center}><ActivityIndicator size="large" /></View>
  else if (error)
    return (<Text>{error}</Text>)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{locale.TILTE}</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
          data={data}
          renderItem={StockCard}
          keyExtractor={(item) => item.symbol}
        />
      </View>
      <TotalCard 
        sumCurrentValue={sumCurrentValue} 
        sumInvestmentValue={sumInvestmentValue} 
        sumTodayProfitLoss={sumTodayProfitLoss} 
        sumProfitLoss={sumProfitLoss} 
       /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flexDirection: 'column',
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    padding: 10,
    backgroundColor: "#5d268e",
  },
  titleText: {
    color: "white"
  },
  container: {
    backgroundColor: 'grey',
    height:"100%"
  },
  listContainer: {
    height:"90%"
  },
});

export default Home;
