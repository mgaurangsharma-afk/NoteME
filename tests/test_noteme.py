import unittest
from pathlib import Path


class TestNoteME(unittest.TestCase):

    def setUp(self):
        self.project_root = Path(__file__).resolve().parent.parent

    def test_main_page_exists(self):
        self.assertTrue((self.project_root / "main.html").exists())

    def test_login_page_exists(self):
        self.assertTrue((self.project_root / "login.html").exists())

    def test_important_page_exists(self):
        self.assertTrue((self.project_root / "important.html").exists())

    def test_main_page_contains_noteme(self):
        main_page = (self.project_root / "main.html").read_text(encoding="utf-8")
        self.assertIn("Note", main_page)
        self.assertIn("Me", main_page)

    def test_main_css_exists(self):
        self.assertTrue((self.project_root / "main.css").exists())



if __name__ == "__main__":
    unittest.main()