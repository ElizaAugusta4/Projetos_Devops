const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');
const { WebTracerProvider } = require('@opentelemetry/web');
const { SimpleSpanProcessor, ConsoleSpanExporter } = require('@opentelemetry/tracing');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

// Configuração do OpenTelemetry para o frontend do navegador
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

const tracerProvider = new WebTracerProvider({
  plugins: {
    documentLoad: {
      // Use esta opção se quiser rastrear o tempo de carregamento do documento
      enabled: true,
      // Se estiver usando SPA (Single Page Application), defina a propriedade below to true.
      // trackedOrigins: ['http://localhost:3000'],
    },
  },
});

const jaegerExporter = new JaegerExporter({
  serviceName: 'my-jaeger-service',
  endpoint: 'http://localhost:14268/api/traces', // Endpoint do servidor Jaeger
});

tracerProvider.addSpanProcessor(new SimpleSpanProcessor(jaegerExporter));
tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
tracerProvider.register();
