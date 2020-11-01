export enum WeatherEvents {
  VENDAVAL = 4,
  GRANIZO = 6,
  GEADA = 235,
  SECA = 248,
  TROMBA_DAGUA = 249,
  CHUVA_EXCESSIVA = 256
}

export const WeatherEvents_Keys = Object.keys(WeatherEvents).filter(k => typeof WeatherEvents[k as any] === 'number');

export const WeatherEvents_Values = WeatherEvents_Keys.map(k => WeatherEvents[k as any]);

export const WeatherEvents_List = WeatherEvents_Keys.map(k => WeatherEvents[k as any] + '(' + k + ')');
