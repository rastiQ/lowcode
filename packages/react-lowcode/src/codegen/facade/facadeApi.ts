import { SourceLineCol } from "../../ast";
import {
  Formatter,
  TableType,
  UiFramework,
} from "../definition/context-types";
import { AppContext } from "../generation/context/app-context";
import { PageContext } from "../generation/context/page-context";
import { WidgetContext } from "../generation/context/widget-context";
import MuiDataTableGenerator from "../generation/generators/list/mui-datatable-generator";
import MuiDetailGenerator from "../generation/generators/detail/mui-detail-generator";
import GrommetDataTableGenerator from "../generation/generators/list/grommet-dt-generator";
import { CodeRW } from "../../io";
import { CodegenRw } from "../io/codegenRw";
import { BasicTableGenerator } from "../generation/generators/list/basic-table-generator";
import { FacadeDeleteOptions, FacadeInsertOptions } from "./interfaces";
import { ColumnSourcePositionResult, WidgetProperties } from "../interfaces";

export async function insertColumn(
  tablePosition: SourceLineCol,
  options: FacadeInsertOptions,
  io: CodeRW
): Promise<string> {
  let generationContext = {
    uiFramework: UiFramework.MaterialUI,
    formatter: Formatter.None,
    index: { tableType: TableType.DataTable, height: "400px" },
  };
  let appContext = new AppContext(generationContext, io);
  let sourceFileContext = new PageContext(
    appContext,
    tablePosition.fileName
  );
  let widgetContext = new WidgetContext(sourceFileContext);

  let generator = new MuiDataTableGenerator(
    generationContext,
    undefined,
    widgetContext
  );
  
  return await generator.insertColumn(tablePosition, options.entityField, options.index);
}

export async function deleteColumn(
  tablePosition: SourceLineCol,
  options: FacadeDeleteOptions,
  io: CodeRW
): Promise<string> {
  let generationContext = {
    uiFramework: UiFramework.MaterialUI,
    formatter: Formatter.None,
    index: { tableType: TableType.DataTable, height: "400px" },
  };
  let appContext = new AppContext(generationContext, io);
  let sourceFileContext = new PageContext(
    appContext,
    tablePosition.fileName
  );
  let widgetContext = new WidgetContext(sourceFileContext);

  let generator = new MuiDataTableGenerator(
    generationContext,
    undefined,
    widgetContext
  );
  
  return await generator.deleteColumn(tablePosition, options.index!);
}

export async function insertColumnToDataTableGrommet(
  tablePosition: SourceLineCol,
  options: FacadeInsertOptions,
  io: CodeRW
): Promise<string> {
  let generationContext = {
    uiFramework: UiFramework.Grommet,
    formatter: Formatter.None,
    index: { tableType: TableType.DataTable, height: "400px" },
  };
  let appContext = new AppContext(generationContext, io);
  let sourceFileContext = new PageContext(
    appContext,
    tablePosition.fileName
  );
  let widgetContext = new WidgetContext(sourceFileContext);

  let generator = new GrommetDataTableGenerator(
    generationContext,
    undefined,
    widgetContext
  );
  
  return await generator.insertColumn(tablePosition, options.entityField, options.index);
}

export async function insertColumnToBasicTableMui(
  tablePosition: SourceLineCol,
  options: FacadeInsertOptions,
  io: CodeRW
): Promise<string> {
  let generationContext = {
    uiFramework: UiFramework.MaterialUI,
    formatter: Formatter.None,
    index: { tableType: TableType.BasicTable, height: "400px" },
  };
  let appContext = new AppContext(generationContext, io);
  let sourceFileContext = new PageContext(
    appContext,
    tablePosition.fileName
  );
  let widgetContext = new WidgetContext(sourceFileContext);

  let generator = new BasicTableGenerator(
    generationContext,
    options.entity,
    widgetContext
  );
  
  return await generator.insertColumn(tablePosition, options.entityField, options.index);
}

export async function insertColumnToBasicTableGrommet(
  tablePosition: SourceLineCol,
  options: FacadeInsertOptions,
  io: CodeRW
): Promise<string> {
  let generationContext = {
    uiFramework: UiFramework.Grommet,
    formatter: Formatter.None,
    index: { tableType: TableType.BasicTable, height: "400px" },
  };
  let appContext = new AppContext(generationContext, io);
  let sourceFileContext = new PageContext(
    appContext,
    tablePosition.fileName
  );
  let widgetContext = new WidgetContext(sourceFileContext);

  let generator = new BasicTableGenerator(
    generationContext,
    options.entity,
    widgetContext
  );
  
  return await generator.insertColumn(tablePosition, options.entityField, options.index);
}

export async function insertFormWidget(
  formPosition: SourceLineCol,
  options: FacadeInsertOptions,
  io: CodegenRw
): Promise<string> {
  let generationContext = {
    uiFramework: UiFramework.MaterialUI,
    formatter: Formatter.None,
    index: { tableType: TableType.DataTable, height: "400px" },
  };
  let appContext = new AppContext(generationContext, io);
  let sourceFileContext = new PageContext(
    appContext,
    formPosition.fileName
  );
  let widgetContext = new WidgetContext(sourceFileContext);

  let generator = new MuiDetailGenerator(
    generationContext,
    undefined,
    widgetContext
  );

  return await generator.insertFormWidget(formPosition, options.entityField);
}

export async function getColumnSourcePosition(
  tablePosition: SourceLineCol,
  options: FacadeDeleteOptions,
  io: CodeRW
): Promise<ColumnSourcePositionResult | undefined> {
  let generationContext = {
    uiFramework: UiFramework.MaterialUI,
    formatter: Formatter.None,
    index: { tableType: TableType.DataTable, height: "400px" },
  };
  let appContext = new AppContext(generationContext, io);
  let sourceFileContext = new PageContext(
    appContext,
    tablePosition.fileName
  );
  let widgetContext = new WidgetContext(sourceFileContext);

  let generator = new MuiDataTableGenerator(
    generationContext,
    undefined,
    widgetContext
  );
  
  return await generator.getColumnSourcePosition(tablePosition, options.index!);
}

export async function getFormWidgetProperties(
  position: SourceLineCol,
  io: CodegenRw
): Promise<WidgetProperties> {
  let generationContext = {
    uiFramework: UiFramework.MaterialUI,
    formatter: Formatter.None,
    index: { tableType: TableType.DataTable, height: "400px" },
  };
  let appContext = new AppContext(generationContext, io);
  let sourceFileContext = new PageContext(
    appContext,
    position.fileName
  );
  let widgetContext = new WidgetContext(sourceFileContext);

  let generator = new MuiDetailGenerator(
    generationContext,
    undefined,
    widgetContext
  );

  return await generator.getFormWidgetProperties(position);
}