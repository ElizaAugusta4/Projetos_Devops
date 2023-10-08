import unittest
import logging
from main import CustomLogger, generate_exception

class TestLogging(unittest.TestCase):
    def setUp(self):
        # Configurando o sistema de logging para os testes
        self.logger = CustomLogger("test", level=logging.DEBUG)

    def tearDown(self):
        # Limpeza após os testes, caso necessário
        pass

    def test_logging_levels(self):
        # Teste para verificar se as mensagens de log são registradas corretamente para cada nível
        self.logger.debug('Mensagem de debug')
        self.logger.info('Mensagem de informação')
        self.logger.warning('Mensagem de aviso')
        self.logger.error('Mensagem de erro')
        self.logger.critical('Mensagem crítica')

    def test_exception_logging(self):
        # Teste para verificar se as exceções são registradas corretamente
        with self.assertLogs('test', level='ERROR') as cm:
            generate_exception(self.logger)
        self.assertIn('Ocorreu uma exceção', cm.output[0])

if __name__ == '__main__':
    unittest.main()


