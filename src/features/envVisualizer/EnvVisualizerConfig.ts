/** configs for dimensions */
export enum Config {
  CanvasMinHeight = 300,
  CanvasMinWidth = 300,
  CanvasPaddingX = 30,
  CanvasPaddingY = 30,

  LevelPaddingX = 10,
  LevelPaddingY = 10,

  FrameMinWidth = 100,
  FramePaddingX = 20,
  FramePaddingY = 30,
  FrameMarginX = 60,
  FrameMarginY = 60,
  FrameCornerRadius = 3,

  FnRadius = 15,
  FnInnerRadius = 3,
  FnTooltipOpacity = 0.6,

  DataMinWidth = 20,
  DataUnitWidth = 40,
  DataUnitHeight = 40,
  DataCornerRadius = 3,
  DataHitStrokeWidth = 5,

  TextPaddingX = 10,
  TextPaddingY = 20,
  TextMargin = 5,
  TextMinWidth = 30,
  FontFamily = 'monospace, monospace',
  FontSize = 15,
  FontStyle = 'normal',
  FontVariant = 'normal',

  HoveredColor = '#32CD32',

  ArrowHeadSize = 10,
  ArrowStrokeWidth = 1,
  ArrowHitStrokeWidth = 5,
  ArrowHoveredStrokeWidth = 2,
  ArrowCornerRadius = 40,
  ArrowMinHeight = 100,
  ArrowNumLanes = 7,

  SA_WHITE = '#999999',
  SA_BLUE = '#2c3e50',
  PRINT_BACKGROUND = '#fafafa',

  ConstantColon = ':= ',
  VariableColon = ': ',
  Ellipsis = '…',

  UnassignedData = '',
  GlobalFrameDefaultText = ':::pre-declared names::',
  GlobalEnvId = '-1'
}

export const ShapeDefaultProps = {
  preventDefault: false
};
