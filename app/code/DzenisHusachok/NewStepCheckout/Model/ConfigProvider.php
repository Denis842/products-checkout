<?php

namespace DzenisHusachok\NewStepCheckout\Model;

use Magento\Checkout\Model\ConfigProviderInterface;
use Magento\Framework\View\LayoutInterface;

/**
 * Class ConfigProvider
 */
class ConfigProvider implements ConfigProviderInterface
{
    private LayoutInterface $_layout;

    public function __construct(LayoutInterface $layout)
    {
        $this->_layout = $layout;
    }

    /**
     * @return array
     * @throws \Exception
     */
    public function getConfig(): array
    {
        $ID_STATIC_BLOCK = 'checkout_new_step_content';

        return [
            'checkout_new_step_content' => $this->_layout->createBlock('Magento\Cms\Block\Block')->setBlockId($ID_STATIC_BLOCK)->toHtml()
        ];
    }
}
