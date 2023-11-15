export class TempUtils
{
  public constructor(private decimals:number, private stepSize: number)
  {
  }

  public roundTemperature ( value: number, change: number ) : number {
    value = Math.round((value + change) * (10**this.decimals))
    let step = Math.round(this.stepSize * (10**this.decimals))
    let mod_value = value % step
    if (mod_value != 0) {
      if (change > 0) {
        value = value - mod_value
      } else {
        value = value + (step - mod_value)
      }
    }
    return value / (10**this.decimals)
  }
}