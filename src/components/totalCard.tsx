import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, UIManager, LayoutAnimation } from 'react-native';
import { locale } from '../en';

if ( UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const layoutAnimConfig = {
  duration: 500,
  create: {
    duration: 500,
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleY,
    springDamping: 0.5,
  }
};

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
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
      LayoutAnimation.configureNext(layoutAnimConfig);
        setCollapsed(!collapsed);
    };

    return (
        <View style={styles.position}> 
            <TouchableOpacity onPress={toggleCollapse}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{collapsed ? 'Show Details' : 'Hide Details'}</Text>
                </View>
            </TouchableOpacity>

            {!collapsed && (
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
            )}
        </View>
    );
};

export default TotalCard;

const styles = StyleSheet.create({
  position:{
    position:"absolute",
    bottom:0,
    width:"100%"
  },
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

  },
  cardBody: {
    paddingHorizontal:10,
    paddingVertical:30,
    backgroundColor: 'white',
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
});
