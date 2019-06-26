/**
 * @author phi
 */

(function (np) {

  np = np || window;

  /**
   * ポリゴンパスセット
   * @param   {CanvasRenderingContext2D}  ctx 描画先コンテキスト
   * @param   {Number}    x 値
   * @param   {Number}    y 値
   * @param   {Number}    radius  半径
   * @param   {Number}    sides   辺の数
   * @param   {Number}    offsetAngle 角度(省略時は270°)
   */
  np.polygon = function (ctx, x, y, radius, sides, offsetAngle) {
    // 内角
    var radDiv = (Math.PI * 2) / sides;
    // 回転オフセット(省略時は270°)
    var radOffset = (offsetAngle != undefined) ? offsetAngle * Math.PI / 180 : -Math.PI / 2;

    // パス描画
    ctx.moveTo(x + Math.cos(radOffset) * radius, y + Math.sin(radOffset) * radius);
    for (var i = 1; i < sides; ++i) {
      var rad = radDiv * i + radOffset;
      ctx.lineTo(
        x + Math.cos(rad) * radius,
        y + Math.sin(rad) * radius
      );
    }
    ctx.closePath();
  };

  /**
   * ポリゴンパス塗りつぶし描画
   * @param   {CanvasRenderingContext2D}  ctx 描画先コンテキスト
   * @param   {Number}    x 値
   * @param   {Number}    y 値
   * @param   {Number}    radius  半径
   * @param   {Number}    sides   辺の数
   * @param   {Number}    offsetAngle 角度(省略時は270°)
   */
  np.fillPolygon = function (ctx, x, y, radius, sides, offsetAngle) {
    ctx.beginPath();
    polygon(ctx, x, y, radius, sides, offsetAngle);
    ctx.fill();
  };

  /**
   * ポリゴンパスストローク描画
   * @param   {CanvasRenderingContext2D}  ctx 描画先コンテキスト
   * @param   {Number}    x 値
   * @param   {Number}    y 値
   * @param   {Number}    radius  半径
   * @param   {Number}    sides   辺の数
   * @param   {Number}    offsetAngle 角度(degree, 省略時は270°)
   */
  np.strokePolygon = function (ctx, x, y, radius, sides, offsetAngle) {
    ctx.beginPath();
    ctx.arc(320, 240, radius, 0, Math.PI*2, false)
    polygon(ctx, x, y, radius, sides, offsetAngle);
    ctx.stroke();
  };

})();